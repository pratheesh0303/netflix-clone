import React, { useEffect, useState } from "react";
import axios from "../utils/axios";
import { Home } from "../components";
import requests from "../utils/requests";
import { Banner } from "../components";
import Player from "../utils/player";
import { auth } from "../utils/Firebase/firebase";
import { useHistory } from "react-router-dom";

export default function HomeContainer() {
  const history = useHistory();
  const [movie, SetMovie] = useState([]);
  const [NetflixOriginals, SetNetflixOriginals] = useState([]);
  const [TopRated, SetTopRated] = useState([]);
  const [ActionMovies, SetActionMovies] = useState([]);
  const [ComedyMovies, SetComedyMovies] = useState([]);
  const [PlayerCalled, CallPlayer] = useState(false);
  const [SelectedMovie, SelectMovie] = useState({});

  useEffect(() => {
    async function FetchData() {
      const [Netflix, Action, Rated, Comedy] = await Promise.all([
        axios.get(requests.FetchNetflixOriginals),
        axios.get(requests.FetchActionMovies),
        axios.get(requests.FetchTopRated),
        axios.get(requests.FetchComedyMovies),
        axios.get(requests.FetchHorrorMovies),
        axios.get(requests.FetchRomanceMovies),
      ]);
      SetMovie(
        Netflix.data.results[
          Math.floor(Math.random() * Netflix.data.results.length - 1)
        ]
      );
      SetNetflixOriginals(Netflix.data.results);
      SetActionMovies(Action.data.results);
      SetTopRated(Rated.data.results);
      SetComedyMovies(Comedy.data.results);
      return [Netflix, Action, Rated, Comedy];
    }
    FetchData();
  }, []);

  // const youtubeInstance =  axios.create({
  //     baseURL: "https://googleapis.com/youtube/v3",
  //     params:{
  //         part:'snippet',
  //         maxResults:1,
  //         key: 'AIzaSyD1nYZXE8Un2vXDadAkMtfS7Kq38qrEH38'
  //     }
  // });

  function FetchTrailers(film) {
    async function FetchTrailer() {
      const params = new URLSearchParams({
        part: "snippet",
        maxResults: 1,
        //key: "AIzaSyD1nYZXE8Un2vXDadAkMtfS7Kq38qrEH38",
        key: process.env.REACT_APP_GOOGLE_API_KEY,
        q: `${film.name ? film.name : film.original_title} Trailer`,
      });
      const trailer = await fetch(
        `https://www.googleapis.com/youtube/v3/search?${params}`
      );
      const Trailer = await trailer.json();
      //await trailer.json();
      return Trailer;
    }
    FetchTrailer().then((movies) => {
      CallPlayer(true);
      SelectMovie(movies); // fetched movies
    });
  }
  async function LogOut(e) {
    e.preventDefault();
    await auth
      .signOut()
      .then((authuser) => {
        history.push("/");
        window.location.reload();
      })
      .catch((error) => {});
  }

  return (
    <>
      <Banner.Topbar>
        <Banner.Logo src="/images/netflix-logo.png"></Banner.Logo>
        <Banner.SigninBtn onClick={LogOut}>Logout</Banner.SigninBtn>
      </Banner.Topbar>
      {PlayerCalled === true && Object.entries(SelectedMovie).length > 0 && (
        <Player SelectedMovie={SelectedMovie} CallPlayer={CallPlayer} />
      )}
      <Home>
        <Home.Banner movie={movie}>
          <Home.MovieName>
            {movie?.title || movie?.name || movie?.original_name}
          </Home.MovieName>
          <Home.PlayButton onClick={() => FetchTrailers(movie)}>
            Play
          </Home.PlayButton>
          <Home.Description>
            {movie?.overview?.slice(1, 60) + "..."}
          </Home.Description>
        </Home.Banner>
        <HomePageRowContainer
          FetchTrailers={FetchTrailers}
          title="Netflix Originals"
          data={NetflixOriginals}
        />
        <HomePageRowContainer
          FetchTrailers={FetchTrailers}
          title="Top Rated Movies"
          data={TopRated}
        />
        <HomePageRowContainer
          FetchTrailers={FetchTrailers}
          title="Top Action Movies"
          data={ActionMovies}
        />
        <HomePageRowContainer
          FetchTrailers={FetchTrailers}
          title="Top Comedy Movies"
          data={ComedyMovies}
        />
      </Home>
    </>
  );
}

export function HomePageRowContainer(props) {
  return (
    <>
      <Home.Row>{props.title}</Home.Row>
      <Home.RowContainer>
        {props.data.map((film) => {
          return (
            <Home.Poster
              key={film.id}
              onClick={() => props.FetchTrailers(film)}
              src={`https://image.tmdb.org/t/p/original/${film?.poster_path}`}
            />
          );
        })}
      </Home.RowContainer>
    </>
  );
}
