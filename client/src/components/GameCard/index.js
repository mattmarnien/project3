import React from "react";
import "./style.css";

function GameCard(props) {
  const card = { height: '300px' }
  return (
    <div className='gameCard' onClick={props.onClick} data-card={props.name} data-id={props.id}>
      <span className='center cardName' data-card={props.name} data-id={props.id}>{props.name}</span>
      <img className='cardImage center' data-card={props.name} data-id={props.id} src={require('../assets/cardImages/' + props.image)} />
      <br />
      <div className='cardText center' data-card={props.name} data-id={props.id}>
        {props.cost ? "Cost: " + props.cost + "\n" : ""}
        {props.class ? "Class: " + props.class + "\n" : ""}
        {props.HP ? "HP: " + props.HP + "\n" : ""}
        {props.attack ? "Attack: " + props.attack + "\n" : ""}
        {props.defense ? "Defense: " + props.defense + "\n" : ""}
        {props.cardBody ? props.cardBody : ""}
      </div>
    </div>
  );
}

export default GameCard;