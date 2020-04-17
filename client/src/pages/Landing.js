import React from "react";
import LandingPage from "../components/LandingPage"

function Landing(props) {
    return (
        <LandingPage user={props.user}/>
  );
}

export default Landing;
