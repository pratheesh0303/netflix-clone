const API_KEY = process.env.REACT_APP_MOVIEDB_API_KEY;

const requests = {
  FetchTrending: `trending/all/week?api_key=${API_KEY}&language=en-US`,
  FetchNetflixOriginals: `discover/tv?api_key=${API_KEY}&with_networks=213`,
  FetchTopRated: `movie/top_rated?api_key=${API_KEY}&language=en-US`,
  FetchActionMovies: `discover/movie?api_key=${API_KEY}&with_genres=28`,
  FetchComedyMovies: `discover/movie?api_key=${API_KEY}&with_genres=35`,
  FetchHorrorMovies: `discover/movie?api_key=${API_KEY}&with_genres=27`,
  FetchRomanceMovies: `discover/movie?api_key=${API_KEY}&with_genres=10749`,
  FetchDocumentaries: `discover/movie?api_key=${API_KEY}&with_genres=99`,
};

export default requests;
