import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";



function Rules() {
   return <div className='container center'>
  <h1>Singularity</h1>
  <ul>
      <li>The goal of the game is to bring your opponent to 0 hitpoints.</li>
      <li>Each player starts with 30 hitpoints and a hand of 5 cards.</li>
      <li>You can attack your opponent with units, spells, or equipment.</li>
      <li>Every card has a cost, a class, and a type. Some cards have additional mechanics printed on them.</li>
      <li>There are four card types: resources, units, spells, and equipment</li>
      <li>Resource cards are used to pay for other cards. They are played, maximum one per turn unless otherwise indicated, and can be tapped to provide one resource of the type provided.</li>
      <li>Unit cards are persistent and can be tapped to attack the opponent during your attack phase.</li>
      <li>Unit cards may also block incoming attacks</li>
      <li>Spell cards are played and their listed effect is resolved immediately</li>
      <li>Equipment cards are either global equipment which effects the entire gamestate, or unit equipment which effects a single card.</li>

  </ul>
  
 </div>
  }


export default Rules;
