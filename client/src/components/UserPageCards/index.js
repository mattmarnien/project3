import React, { useState, useEffect } from 'react'
import './style.css'
import API from "../../utils/API"
import GameCard from "../GameCard"

function UserPageCards() {
    const [cards, setCards] = useState([]);

    useEffect(() => {
        API.getCards().then(res => {
            //console.log(res.data)
            setCards(res.data)
            console.log(cards)
        }).catch(err => console.log(err))
    }, [])

    return (
        <>
            <h4>This will display your cards</h4>
            <div className="row cardArea">

                {cards.map(card => (
                    <div className="col s6 m4 l2 cardDiv">
                        <GameCard
                            key={card._id}
                            id={card._id}
                            data-card={card.name}
                            name={card.name}
                            image={card.image}
                            attack={card.attack}
                            defense={card.defense}
                            HP={card.HP}
                            cardBody={card.cardBody}
                            cost={card.cost}
                            class={card.class}
                        // onClick={addToDeck}
                        />
                    </div>
                ))}

            </div>
        </>
    )
}

export default UserPageCards;