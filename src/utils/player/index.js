/* eslint-disable jsx-a11y/iframe-has-title */
import React, { useEffect, useState } from "react";
import { FaWindowClose } from "react-icons/fa";
import styles from "./player.module.css";
export default function Player(props) {
  console.log(props.SelectedMovie);
  const id = props.SelectedMovie.items[0].id.videoId;
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });
  const [PlayerOpen, UpdatePlayerOpen] = useState(true);

  const PlayerClose = () => {
    console.log("sss");
    UpdatePlayerOpen(false);
  };
  useEffect(() => {
    function handleResize() {
      // UpdatePlayerOpen(true);
      console.log(window.innerHeight);
      // Set window width/height to state
      setWindowSize({
        width: window.innerWidth - 150,
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
          width={windowSize.width}
          height={windowSize.height}
          src={`https://www.youtube.com/embed/${id}`}
        ></iframe>
      </div>
    </div>
  );
}
