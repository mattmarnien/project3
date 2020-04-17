import React from "react";
import { Link } from "react-router-dom";
import Button from "../Button/index"
import "./landingpage.css"
import Singularity from "../assets/images/favicon.png"

function LandingPage(props) {
  console.log(props)
  return (
    <>
      <div className="titleDiv">
        <img src={Singularity} alt="Singularity icon" className="icon" />
        <h2 className="homeTitle">Singularity</h2>
      </div>
      <div className="home">
        {props.user.user !== null ?
          <h5><Link to='/gameplay'><Button classes='waves-effect waves-light center btn-large homeBtn'>Play Now</Button></Link></h5>
          :
          <h5><Link to="/signup">Sign up</Link> or <Link to={"/login"}>log in</Link> to get started.</h5>}
        <Link to={"/rules"} className="rulesBtn"><Button classes='waves-effect waves-light center btn-large homeBtn'>Rules</Button></Link>
      </div>
    </>
  );
}

export default LandingPage;