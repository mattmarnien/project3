import React from "react";
import Nav from './components/Nav'
import { BrowserRouter } from "react-router-dom";
import GameCard from "./components/GameCard";

function App() {
  return (
    <>
    <Nav />
    <BrowserRouter>
    <>
      <GameCard />
    </>
    </BrowserRouter>
    </>
  );
}

export default App;
