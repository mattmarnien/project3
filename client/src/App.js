import React from "react";
import Nav from './components/Nav'
import Footer from './components/Footer'
import Library from './components/Library'
import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from "./pages/Login"
import Signup from "./pages/Signup"
import GameCard from "./components/GameCard";



function App() {
  
  
  return (
    <>

      <Nav />
      <Router>
        <Route path="/signup" component={Signup} />
        <Route path="/login" component={Login} />
      </Router>
      <Library />
      <Footer />

    </>
  );
}

export default App;
