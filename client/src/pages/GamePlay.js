import React from "react";
import GamePlayPage from "../components/GamePlayPage";


  var userCards = [{_id: 1,name:"CardName1",image:"deadly-strike.png",attack:3,HP:5},{_id: 2,name:"CardName2",image:"deadly-strike.png",attack:4,HP:4},{_id: 3,name:"CardName3",image:"deadly-strike.png",attack:2,HP:6},{_id: 4,name:"CardName4",image:"deadly-strike.png",attack:3,HP:4}];/* ,{_id: 5,name:"CardName5",image:"deadly-strike.png",attack:4,HP:2},{_id: 6,name:"CardName6",image:"deadly-strike.png",attack:1,HP:6}];*/
  var userAvatar= ["avatar2.jpg"]; 
 
  var opponentCards = [{_id: 1,name:"CardName1",image:"plasma-bolt.png",attack:2,HP:5},{_id: 2,name:"CardName2",image:"plasma-bolt.png",attack:4,HP:3},{_id: 3,name:"CardName3",image:"plasma-bolt.png",attack:3,HP:5},{_id: 4,name:"CardName4",image:"plasma-bolt.png",attack:5,HP:2},{_id: 5,name:"CardName5",image:"plasma-bolt.png",attack:1,HP:7},{_id: 6,name:"CardName6",image:"plasma-bolt.png",attack:6,HP:2}];
  var opponentAvatar= ["avatar3.png"];
  function GamePlay(){
   
    return (
        <GamePlayPage userCards={userCards} userAvatar={userAvatar} opponentCards={opponentCards} opponentAvatar={opponentAvatar}/>
    )
}

export default GamePlay;
