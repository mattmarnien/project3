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


<<<<<<< HEAD
  // if (response.data.user) {
  //   console.log('Get User: There is a user saved in the server session: ')

  //   setUser({
  //     loggedIn: true,
  //     username: response.data.user.username
  //   })
  // } else {
  //   console.log('Get user: no user');
  //   setUser({
  //     loggedIn: false,
  //     username: null
  //   })
  // }


<<<<<<< HEAD

  // getUser()
  // console.log('user: ' + user)



  // const PrivateRoute = ({component: Component, ...rest}) => (<Route {...rest} render={(props) => (
  //  user !== null ? <Component {...props} /> : <Redirect to='/login' />)} />)
  console.log(user)
  //   if(user !== null){
  // let userPage = User
  //   }
  //   else{
  //     let userPage = Login
  //   }
=======
=======



>>>>>>> dcbb787968588f4cc0fa9ba68bd1193875484ecd
const [user, setUser] = useState({user: null});

useEffect( () => {
  axios.get("/api/checkUser").then(response => {
if(response.data){
  setUser(response.data._id)
}  
})})

<<<<<<< HEAD
>>>>>>> 6aea9cb8379da8068ded2ac82d745201d8446c63
=======

>>>>>>> dcbb787968588f4cc0fa9ba68bd1193875484ecd

  return (
    <>


      <Router>
        <Nav />
        <Route path="/" component={Landing} />
        <Route path="/signup" component={Signup} />
        <Route path="/login" component={Login} />
        <Route path="/gameplay" component={() => user.user !== null ? <GamePlay /> : <Login />} />
        <Route path="/user" component={() => user.user !== null ? <User /> : <Login />} />
        <Route path="/cards" component={Library} />
        <Route path="/deckbuilder" component={() => user.user !== null ? <DeckBuilder /> : <Login />} />
        <Route path='/card' render={() => <GameCard name='Hacker' image='hacker.png' />} />
        <Footer />
      </Router>

    </>
  );
}

export default App;
