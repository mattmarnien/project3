import React, { useState } from "react";
import { Link } from "react-router-dom"
import './nav.css'
import API from "../../utils/API";

function Nav(props) {

  const logOut = () => {
    console.log('clicked')
    API.userLogout()
      .then(res => {
        window.location = '/';
        console.log(res)
      })
      .catch(err => console.log(err))
  }

  return (
    <nav>
      <div className="nav-wrapper navBar grey lighten-1">
        <a href="/" className="brand-logo center"><img className='logo' src={require('../assets/images/singularityLogo.png')} alt='singularity logo' /></a>
        <ul className="left hide-on-med-and-down">
          <li><Link to="/gameplay">Play</Link></li>
          <li><Link to="/user">User</Link></li>
          <li><Link to="/deckbuilder">Deck Builder</Link></li>
          <li><Link to="/cards">Cards</Link></li>
          <li>{props.user.user !== null ? <Link onClick={logOut}>Log Out</Link> : <Link to="/login">Log In</Link>}</li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;