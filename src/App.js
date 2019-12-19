import React from "react";

import "./App.css";
import SongContextProvider from "./contexts/SongContext";
import Navbar from "./components/Navbar/Navbar";
import SongList from "./components/SongList/SongList";
import SongForm from "./components/SongForm/SongForm";

const App = () => {
  return (
    <div className="App">
      <SongContextProvider>
        <Navbar />
        <SongList />
        <SongForm />
      </SongContextProvider>
    </div>
  );
};

export default App;
