import React, { useContext, useState } from "react";

import "./SongForm.css";
import { SongContext } from "../../contexts/SongContext";

const SongForm = () => {
  const { addSong } = useContext(SongContext);

  const [title, setTitle] = useState("");
  const [artist, setArtist] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    addSong(title, artist);
    setTitle("");
    setArtist("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Song Title"
        value={title}
        onChange={e => {
          setTitle(e.target.value);
        }}
        required
      />
      <input
        type="text"
        placeholder="Song Artist"
        value={artist}
        onChange={e => {
          setArtist(e.target.value);
        }}
        required
      />
      <input type="submit" value="Add Song" />
    </form>
  );
};

export default SongForm;
