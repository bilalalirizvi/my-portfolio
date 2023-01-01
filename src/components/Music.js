import React, { useState } from "react";
import { Stack } from "../components";
import { FaSoundcloud } from "react-icons/fa";
import music from "../assets/audio/music.mp3";
import Radium from "radium";

const styles = {
  container: {
    position: "absolute",
    top: 20,
    right: 20,
    zIndex: 1000,
    backgroundColor: "#1D1D1D",
    "@media (max-width: 700px)": {
      left: "20px ",
      right: "0px",
      width: "115px",
    },
  },
  button: {
    border: "none",
    outline: "none",
    backgroundColor: "transparent",
    fontSize: 16,
    fontWeight: "bold",
    cursor: "pointer",
  },
};

const Music = () => {
  const [audio, setAudio] = useState(new Audio(music));
  const [isPlaying, setIsPlaying] = useState(false);

  const playPause = () => {
    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }
    setIsPlaying(!isPlaying);
  };
  return (
    <Stack
      direction={"row"}
      alignItems={"center"}
      spacing={5}
      style={styles.container}
    >
      <FaSoundcloud color={isPlaying ? "yellow" : "red"} size={25} />
      <p style={{ color: "#fff" }}>Sound</p>
      <button
        style={{ ...styles.button, color: isPlaying ? "yellow" : "red" }}
        onClick={playPause}
      >
        {isPlaying ? "ON" : "OFF"}
      </button>
    </Stack>
  );
};

export default Radium(Music);
