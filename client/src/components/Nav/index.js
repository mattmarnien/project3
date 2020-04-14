import React from "react";
import { Link } from "react-router-dom"
import './nav.css'

function Nav() {
  return (
    
    <nav>
      <div className="nav-wrapper navBar grey lighten-1">
        <a href="/" className="brand-logo center"><img className='logo' src={require('../assets/images/singularityLogo.png')} alt='singularity logo'/></a>
        <ul className="left hide-on-med-and-down">
          <li><Link to="/cards">Cards</Link></li>
          <li><Link to="/user">User</Link></li>
          <li className="active"><a href="collapsible.html">Decks</a></li>
          <li><Link to="/login">Log in</Link></li>

        </ul>
      </div>
    </nav> 

    );
}

export default Nav;
