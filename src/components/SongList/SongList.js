import React, { useContext } from "react";

import "./SongList.css";
import { SongContext } from "../../contexts/SongContext";
import SongDetails from "../SongDetails/SongDetails";

const SongList = () => {
  const { songs } = useContext(SongContext);

  return songs.length ? (
    <div className="songsList">
      <ul>
        {songs.map(song => {
          return <SongDetails key={song.id} song={song} />;
        })}
      </ul>
    </div>
  ) : (
    <div className="empty">
      <span>No songs to listen.</span>
    </div>
  );
};

export default SongList;
