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
        <div className='gameCard'>
          <span className='center cardName'>{props.name}</span>
          <img className='cardImage center' src={require('../assets/cardImages/' + props.image)} />
          <br />
          <div class='cardText center'>
            Cost: 1
            Health: 2
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