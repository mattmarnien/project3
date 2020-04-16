import React from "react";
import "./style.css";

function Deck(props) {
  const card = { height: '300px' }
  return (

    <div className='gameCard' onClick={props.onClick} data-card={props.name} data-id={props.id}>
      <span className='center cardName' data-card={props.name} data-id={props.id}>{props.name}</span>
      <img className='cardImage center' data-card={props.name} data-id={props.id} src={require('../assets/cardImages/' + props.image)} />
      <br />
      <div className='cardText center' data-card={props.name} data-id={props.id}>
        {props.cost ? "Cost:" + props.cost + " " : ""}
        {props.class ? "Class:" + props.class + " " : ""}
        {props.HP ? "HP:" + props.HP + " " : ""}
        {props.attack ? "Attack:" + props.attack + " " : ""}
        {props.defense ? "Defense:" + props.defense + " " : ""}
        {props.cardBody ? props.cardBody : ""}
      </div>
    </div>

  );
}

export default Deck;