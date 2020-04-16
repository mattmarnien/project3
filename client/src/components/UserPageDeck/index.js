import React, { useState, useEffect } from 'react'
import './style.css'
import API from "../../utils/API"
import Deck from "../Deck";

function UserPageDeck() {
    const [decks, setDecks] = useState([]);

    useEffect(() => {
        API.getDeck().then(res => {
            console.log(res.data)
            setDecks(res.data)
        }).catch(err => console.log(err))
    }, [])

    return (
        <>
            <h4>This will display your decks</h4>
            {decks.map(deck => (
                <Deck

                />
            ))}
        </>
    )
}

export default UserPageDeck;