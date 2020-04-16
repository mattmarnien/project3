import React, { Component, useState, useEffect } from "react";
import Nav from './components/Nav'
import Footer from './components/Footer'
import Library from './components/Library'
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import Login from "./pages/Login"
import Signup from "./pages/Signup"
import GameCard from "./components/GameCard";
import User from "./pages/User";
import DeckBuilder from "./pages/DeckBuilder"
import GamePlay from "./pages/GamePlay"
import Landing from "./pages/Landing"
import axios from "axios";

function App() {

  const [user, setUser] = useState({ user: null });

  axios.get("/api/checkUser").then(response => {
    if (response.data) {
      setUser(response.data._id)
    }
  })





const [loggedUser, setLoggedUser] = useState({user: null});

useEffect( () => {
  axios.get("/api/checkUser").then(response => {
if(response.data){
  setLoggedUser(response.data._id)
}  
})})



  return (
    <>


      <Router>
        <Nav />
        <Route path="/" component={Landing} />
        <Route path="/signup" component={Signup} />
        <Route path="/login" component={Login} />

        <Route path="/gameplay" component={GamePlay} />
        <Route path="/user" component={()=> loggedUser.user !== null ? <User/> : <Login/>}  />
        <Route path="/cards" component={Library} />
        <Route path="/deckbuilder" component={()=> loggedUser.user !== null ? <DeckBuilder/> : <Login/>} />
        <Route path='/card' render={ () => <GameCard name='Hacker' image='hacker.png' />}/>

        <Footer />
      </Router>

    </>
  );
}

export default App;
