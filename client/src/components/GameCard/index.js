import React from "react";
import "./style.css";

function GameCard(props) {
  const card = { height: '300px' }
  return (
    // <>
    //   <div className="row">
    //     <div className="col s3">
    //     <div >
    //       <img className='template' src={require('../assets/templates/singularityTechTemplate.png')} />
    //       {props.name}
    //       <div className="card-image">
    //         {/* props */}
    //         <img className='cardImage' src={require('../assets/cardImages/' + props.image)} /> 
    //       </div>
    //       <div className="card-stacked ">
    //         <div className="card-content right-align">
    //           <ul>
    //             <li>
    //               {/* props */}
    //               Attack: {props.attack}
    //               HP: {props.HP}
    //             </li>
    //           </ul>
    //         </div>
    //       </div>
    //     </div>
    //     </div>
    //     </div>
    // </>
    <div className='container'>
      <div className='row'>
        <div className='gameCard' onClick={props.onClick} data-card={props.name}>
          <span className='center cardName' data-card={props.name}>{props.name}</span>
          <img className='cardImage center' data-card={props.name} src={require('../assets/cardImages/' + props.image)} />
          <br />
          <div className='cardText center' data-card={props.name}>
            Cost: {props.cost}
            HP: {props.HP}
            Defense: 3
            Flash
        {props.cardBody}
          </div>
        </div>
      </div>
    </div>
  );
}

export default GameCard;