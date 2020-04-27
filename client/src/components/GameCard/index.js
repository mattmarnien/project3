import React from "react";
import "./style.css";
const techBack = require('../assets/images/techBack.jfif')
const arcaneBack = require( '../assets/images/arcaneBack.jpg')

function GameCard(props) {
  let cardBackground = props.class == 'Tech' ? techBack : arcaneBack;
  console.log(cardBackground)
  const cardStyle = {
    cursor: 'pointer',
    width: '90%',
   height: '40vh',
    backgroundImage: `url("${cardBackground}")`,
    backgroundSize: 'contain'
  }
   


  return (
    <div className='gameCard' onClick={props.onClick} data-card={props.name} data-id={props.id} style={cardStyle}>
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