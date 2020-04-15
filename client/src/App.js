import React from "react";
import Nav from './components/Nav'
import Footer from './components/Footer'
import Library from './components/Library'
import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from "./pages/Login"
import Signup from "./pages/Signup"
import GameCard from "./components/GameCard";
import User from "./pages/User";
import DeckBuilder from "./pages/DeckBuilder"
import GamePlay from "./pages/GamePlay"





function App() {
  
  
  return (
    <>

     
      <Router>
        <Nav />
        <Route path="/signup" component={Signup} />
        <Route path="/login" component={Login} />
        <Route path="/gameplay" component={GamePlay} />
        <Route path="/user" component={User} />
        <Route path="/cards" component={Library} />
        <Route path="/deckbuilder" component={DeckBuilder} />
        <Route path='/card' render={ () => <GameCard name='Hacker' image='hacker.png' />}/>
        <Footer />
      </Router>
      
    </>
  );
}

export default App;
