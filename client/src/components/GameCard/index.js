import React from "react";
import "./style.css";

function GameCard(props) {
  return (
    <>
      <div className="row">
        <div className="col s3">
        <div className="card horizontal">
          {props.name}
          <div className="card-image">
            {/* props */}
            <img src={props.image} /> 
          </div>
          <div className="card-stacked ">
            <div className="card-content right-align">
              <ul>
                <li>
                  {/* props */}
                  Attack: {props.attack}
                  HP: {props.HP}
                </li>
              </ul>
            </div>
          </div>
        </div>
        </div>
        </div>
    </>
  );
}

export default GameCard;