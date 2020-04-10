import React from "react";
import { BrowserRouter } from "react-router-dom";
import GameCard from "./components/GameCard";

function App() {
  return (
    <BrowserRouter>
    <>
      <GameCard />
    </>
    </BrowserRouter>
  );
}

export default App;
