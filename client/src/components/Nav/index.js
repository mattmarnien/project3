import React from "react";
import './nav.css'

function Nav() {
  return (
    <nav>
      <div className="nav-wrapper navBar grey lighten-1">
        <a href="/" className="brand-logo center"><img className='logo' src={require('../assets/images/singularityLogo.png')} alt='singularity logo'/></a>
        <ul className="left hide-on-med-and-down">
          <li><a href="sass.html">Cards</a></li>
          <li><a href="badges.html">User</a></li>
          <li className="active"><a href="collapsible.html">Decks</a></li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
