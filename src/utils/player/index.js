/* eslint-disable jsx-a11y/iframe-has-title */
import React, { useEffect, useState } from "react";
import { FaWindowClose } from "react-icons/fa";
import styles from "./player.module.css";
export default function Player(props) {
  const id = props.SelectedMovie.items[0].id.videoId;
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });
  const [PlayerOpen, UpdatePlayerOpen] = useState(true);

  const PlayerClose = () => {
    props.CallPlayer(false);
    var iframe = document.querySelector( 'iframe');
    var video = document.querySelector( 'video' );
    if ( iframe !== null ) {
        var iframeSrc = iframe.src;
        iframe.src = iframeSrc;
    }
    if(video){
      video.pause();
    }
    UpdatePlayerOpen(false);
  };
  useEffect(() => {
    function handleResize() {
      // UpdatePlayerOpen(true);
      // Set window width/height to state
      setWindowSize({
        width: window.innerWidth - 50,
        height: window.innerHeight - 150,
      });
    }
    handleResize();
  }, []);
  // Add event listener

  return (
    <div
      id="myNav"
      className={PlayerOpen ? styles.overlay : styles.closePlayer}
    >
      <FaWindowClose onClick={PlayerClose} className={styles.closebtn} />
      <div className={styles.overlayContent}>
        <iframe
          allowFullScreen
          id="player"
          width={windowSize.width}
          height={windowSize.height}
          src={`https://www.youtube.com/embed/${id}`}
        ></iframe>
      </div>
    </div>
  );
}
