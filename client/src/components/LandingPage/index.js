import React from "react";
import { Link } from "react-router-dom";
import Button from "../Button/index"
import "./landingpage.css"
import Singularity from "../assets/images/favicon.png"

function LandingPage() {


  return (
    <>
      <div className="titleDiv">
        <img src={Singularity} alt="Singularity icon" className="icon" />
        <h2 className="homeTitle">Singularity</h2>
      </div>
      <h5><Link to="/signup">Sign up</Link> or <Link to={"/login"}>log in</Link> to get started.</h5>
      <div className="home">
        <Link to={"#"}><Button classes='waves-effect waves-light center btn-large homeBtn'>Rules</Button></Link>
      </div>
    </>
  );
}

export default LandingPage;
