import React from "react";
import "./style.css";

function GameCard() {
  return (
    <>
      
        <h2 class="header">Horizontal Card</h2>
        <div class="card horizontal">
          <div class="card-image">
            <img src="https://lorempixel.com/100/190/nature/6" />
          </div>
          <div class="card-stacked">
            <div class="card-content">
              <p>I am a very simple card. I am good at containing small bits of information.</p>
            </div>
            <div class="card-action">
              <a href="#">This is a link</a>
            </div>
          </div>
        </div>
      
    </>
  );
}

export default GameCard;