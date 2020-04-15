import React, { useState, useEffect } from "react";
import "./style.css"

function GamePlay(props) {
    const [user, setUser] = useState(
        {
            cards : [],
            avatar: "",
            health: 30,
            playedCards: []
        }
    );
    const [opponent, setOpponent] = useState(
        {
            cards : [],
            avatar: "",
            health: 30
        }
    );

    const [turn, setTurn] = useState("user");
    useEffect(() => {
    
        setUser(
            {   ...user,
                cards: props.userCards,
                avatar: props.userAvatar
            }
        );

        setOpponent(
            {   ...opponent,
                cards: props.opponentCards,
                avatar: props.opponentAvatar
            }
        );

        
      }, []);
    
    function cardSelect(event) {
       /*  if(turn === "user"){ */
            console.log(event.target.id);
             var card  = user.cards.filter(card => {
            console.log(card._id);
            return card._id === parseInt(event.target.id);
            }
            );
             console.log(card);
        
              var cardHand = user.cards.filter(card => {
            return card._id !== parseInt(event.target.id);
           });

           setUser({
                ...user,
                playedCards :[...user.playedCards,card[0]],
                cards: cardHand
            }); 
                 console.log(card[0].attack);
            setOpponent ({
                ...opponent,
                health: opponent.health - card[0].attack
            })
            /* setTurn("opponent");
            opponentMove(); */
       /*  } */
    }

    function opponentMove() {
        /* ... */
    }
   
    
    return (

        <>
            <div className="container  gamearea">
                <div className="row opponentRow1 ">
                   <div class="opponentHand  ">
                        <div className="hp"> 
                            Health
                            <br />
                            {opponent.health}
                        </div>
                        {opponent.avatar === "" ? "" :  <img className="opponentAvatar" src={require("../assets/images/" + opponent.avatar)} alt="Opponent Avatar"></img>} 
                        {opponent.cards.map(card => {
                            return      (                            
                                <img className="opponentCard" src={require("../assets/images/" + card.image)} alt={card.name}></img>
                            )
                        })}
                   </div>
                </div>
                <div className="row opponentRow2 ">
                    <div className="col s2 ">
                       
                    </div>
                    <div className="col s10 opponentPlayedCardsArea">
                         <div class="opponentPlayedCards ">
                           
                        </div>
                    </div>
                </div>
                <div className="row userRow1 ">
                    <div className="col s2 resourceArea">
                       
                    </div>
                    <div className="col s10 userPlayedCardsArea ">
                         <div class="userPlayedCards ">
                            {user.playedCards.map(card => {
                                return      (                            
                                    <img className="userCard" id={card._id} src={require("../assets/images/" + card.image)} alt={card.name} onClick={cardSelect}></img>
                                )
                            })}
                        </div>
                    </div>
                 </div>
                 <div className="row userRow2">
                    <div className="col s12 userHandArea">
                        <div class="userHand  ">
     
                            <div className="hp"> 
                                Health
                                <br />
                                {user.health}
                            </div>
                           
                            {user.avatar === "" ? "" :  <img className="userAvatar" src={require("../assets/images/" + user.avatar)} alt="User Avatar"></img>}
                            {user.cards.map(card => {
                                return      (                            
                                    <img className="userCard" id={card._id} src={require("../assets/images/" + card.image)} alt={card.name} onClick={cardSelect}></img>
                                )
                            })}
                        </div>
                    </div>
                </div> 
            </div>

        </>
    )

}

export default GamePlay;
