import React, { createContext, useState } from "react";
import uuid from "uuidv1";

export const SongContext = createContext();

const SongContextProvider = props => {
  const music = [
    { title: "Whatever It Takes", artist: "Imagine Dragons", id: 1 },
    { title: "Black", artist: "Pearl Jam", id: 2 }
  ];

  const [songs, setSongs] = useState(music);

  const addSong = (title, artist) => {
    setSongs([...songs, { title, artist, id: uuid() }]);
  };

  const removeSong = id => {
    setSongs(songs.filter(song => song.id !== id));
  };

  return (
    <SongContext.Provider value={{ songs, addSong, removeSong }}>
      {props.children}
    </SongContext.Provider>
  );
};

export default SongContextProvider;
