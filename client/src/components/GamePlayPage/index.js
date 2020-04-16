import React, { useState, useEffect } from "react";
import "./style.css"

const styles = {

}
const handSize = 3;

function GamePlay(props) {

    const [user, setUser] = useState(
        {
            deck: [],
            hand: [],
            playedCards: [],
            avatar: "",
            health: 30,

        }
    );
    const [opponent, setOpponent] = useState(
        {
            cards: [],
            avatar: "",
            health: 30,
            playedCards: []
        }
    );

    const [turn, setTurn] = useState("user");

    useEffect(() => {
        /* Load cards into the hand */
        var startHand = [];
        for (let i = 0; i < handSize; i++) {
            startHand.push(props.userCards[i]);
        }
        //console.log("User Hand:" );
        //console.log(startHand);

        /*Remove hand cards from deck*/
        var startDeck = [];
        for (let i = handSize; i < props.userCards.length; i++) {
            startDeck.push(props.userCards[i]);
        }
        //console.log("User Deck:" );
        //console.log(startDeck);

        setUser(
            {
                ...user,
                deck: startDeck,
                hand: startHand,
                avatar: props.userAvatar
            }
        );

        setOpponent(
            {
                ...opponent,
                cards: props.opponentCards,
                avatar: props.opponentAvatar
            }
        );


    }, []);

    function cardSelect(event) {
        if (turn === "user") {

            //console.log(event.target.id);
            console.log(event.target);

            /* console.log(event.target); */

            /*User played card*/
            var card = user.hand.filter(card => {
                // console.log(card._id);
                return card._id === parseInt(event.target.id);
            });

            //console.log(card);

            /*Remove played card from hand*/
            var cardHand = user.hand.filter(card => {
                return card._id !== parseInt(event.target.id);
            });

            var newDeck = [];
            /*Move a card from the deck to the hand*/
            if (user.deck.length >= 1) {
                cardHand.push(user.deck[0])
                newDeck = user.deck.filter((card, index) => {
                    return index !== 0;
                });
            } else {
                console.log("User out of cards!");
            }
            var ids = newDeck.map(card => card._id)
            console.log("Card Hand:");
            console.log(cardHand);
            console.log("Deck:");
            console.log(newDeck);

            setUser({
                ...user,
                playedCards: [...user.playedCards, card[0]],
                hand: cardHand,
                deck: newDeck
            });
            //console.log(card[0].attack);
            setOpponent({
                ...opponent,
                health: opponent.health - card[0].attack
            })

            setTimeout(function () { opponentMove(opponent.health - card[0].attack, newDeck, cardHand, [...user.playedCards, card[0]]); }, 3000);
            setTurn("opponent");
            /* opponentMove(opponent.health - card[0].attack,cardHand,[...user.playedCards,card[0]]); */

        }
    }

    function opponentMove(newHealth, userDeck, userHand, userPlayedCards) {

        var nextCard = opponent.cards[0];
        var updatedCards = opponent.cards.filter((card, index) => {
            return index !== 0;
        });
        //console.log(updatedCards)
        setOpponent({
            ...opponent,
            health: newHealth,
            cards: updatedCards,
            playedCards: [...opponent.playedCards, nextCard]
        })
        setUser({
            ...user,
            deck: userDeck,
            hand: userHand,
            playedCards: userPlayedCards,
            health: user.health - nextCard.attack
        })
        setTurn("user");

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
                        {opponent.avatar === "" ? "" : <img className="opponentAvatar" src={require("../assets/images/" + opponent.avatar)} alt="Opponent Avatar"></img>}
                        {opponent.cards.map(card => {
                            return (
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
                            {opponent.playedCards.map(card => {
                                return (
                                    <img className="opponentCard" src={require("../assets/images/" + card.image)} alt={card.name}></img>
                                )
                            })}
                        </div>
                    </div>
                </div>
                <div className="row userRow1 ">
                    <div className="col s2 resourceArea">

                    </div>
                    <div className="col s10 userPlayedCardsArea ">
                        <div class="userPlayedCards ">
                            {user.playedCards.map(card => {
                                return (
                                    <img className="playedCard" id={card._id} src={require("../assets/images/" + card.image)} alt={card.name} onClick={cardSelect}></img>
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
                         
                            {user.avatar === "" ? "" : <img className="userAvatar" src={require("../assets/images/" + user.avatar)} alt="User Avatar"></img>}
                            {user.hand.map(card => {

                                return (
                                    <div class="tooltip" >
                                        <img className="userCard " id={card._id} src={require("../assets/images/" + card.image)} alt={card.name} onClick={cardSelect}></img>
                                        <div class="tooltiptext">
                                            Attack: {card.attack}
                                            <br/>
                                            HP: {card.HP}
                                        </div>
                                    </div>
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
