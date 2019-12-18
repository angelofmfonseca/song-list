import React from "react";

import "./App.css";
import SongContextProvider from "./contexts/SongContext";
import Navbar from "./components/Navbar/Navbar";
import SongList from "./components/SongList/SongList";

const App = () => {
  return (
    <div className="App">
      <SongContextProvider>
        <Navbar />
        <SongList />
      </SongContextProvider>
    </div>
  );
};

export default App;
