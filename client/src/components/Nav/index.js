import React from "react";
import { Link } from "react-router-dom"
import './nav.css'
import API from "../../utils/API";

function Nav() {
  return (

    <nav>
      <div className="nav-wrapper navBar grey lighten-1">
        <a href="/" className="brand-logo center"><img className='logo' src={require('../assets/images/singularityLogo.png')} alt='singularity logo' /></a>
        <ul className="left hide-on-med-and-down">
          <li><Link to="/gameplay">Play</Link></li>
          <li><Link to="/user">User</Link></li>
          <li><Link to="/deckbuilder">Deck Builder</Link></li>
          <li><Link to="/cards">Cards</Link></li>
          <li><Link to="/login">Log in</Link></li>
          <li onClick={API.userLogout}>Log out</li>
        </ul>
      </div>
    </nav>

  );
}

export default Nav;
