import React, { useContext } from "react";

import "./SongDetails.css";
import { SongContext } from "../../contexts/SongContext";

const SongDetails = ({ song }) => {
  const { dispatch } = useContext(SongContext);

  return (
    <li
      className="singleSong"
      onClick={() => {
        dispatch({ type: "REMOVE_SONG", id: song.id });
      }}
    >
      <div className="title">{song.title}</div>
      <div className="artist">{song.artist}</div>
    </li>
  );
};

export default SongDetails;
