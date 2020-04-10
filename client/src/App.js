import React from "react";
import Nav from './components/Nav'
import { BrowserRouter } from "react-router-dom";
import GameCard from "./components/GameCard";
import User from "./pages/User";

function App() {
  return (
    <>
    <Nav />
    <BrowserRouter>
    <>
      <User />
    </>
    </BrowserRouter>
    </>
  );
}

export default App;
