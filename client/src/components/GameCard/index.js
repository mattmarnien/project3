import React from "react";
import "./style.css";

function GameCard(props) {
  return (
    <>
      <div class="row">
        <div class="col s3">
        <div class="card horizontal">
          <div class="card-image">
            {/* props */}
            <img src="https://lorempixel.com/100/190/nature/6" /> 
          </div>
          <div class="card-stacked ">
            <div class="card-content right-align">
              <ul>
                <li>
                  {/* props */}
                  Attack: 40
                  HP: 100
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