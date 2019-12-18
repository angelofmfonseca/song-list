import React, { useContext } from "react";

import "./Navbar.css";
import { SongContext } from "../../contexts/SongContext";

const Navbar = () => {
  const { songs } = useContext(SongContext);

  return (
    <section className="navbar">
      <h1>Song List</h1>
      <span>Currently, you have {songs.length} songs to listen...</span>
    </section>
  );
};

export default Navbar;
