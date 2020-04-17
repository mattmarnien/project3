import React from "react";
import "./style.css";

function Deck(props) {
  return (

    <>
      <p>{props.id}</p>
      <p>{props.name}</p>
      <p>{props.deck}</p>
    </>

    // <div className='paper' onClick={props.onClick} data-card={props.name} data-id={props.id}>
    //   <span className='center cardName' data-card={props.name} data-id={props.id}>{props.name}</span>
    //   <img className='cardImage center' data-card={props.name} data-id={props.id} src={require('../assets/cardImages/' + props.image)} />
    //   <br />
    //   <div className='cardText center' data-card={props.name} data-id={props.id}>
    //     {props.cost ? "Cost:" + props.cost + " " : ""}
    //     {props.class ? "Class:" + props.class + " " : ""}
    //     {props.HP ? "HP:" + props.HP + " " : ""}
    //     {props.attack ? "Attack:" + props.attack + " " : ""}
    //     {props.defense ? "Defense:" + props.defense + " " : ""}
    //     {props.cardBody ? props.cardBody : ""}
    //   </div>
    // </div>


  );
}

export default Deck;