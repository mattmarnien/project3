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
            {cards.map(card => (
                <GameCard
                    key={card._id}
                    name={card.name}
                    image={card.image}
                    attack={card.attack}
                    HP={card.HP}
                    cardBody="hello"
                />
            ))}
        </>
    )
}

export default UserPageCards;