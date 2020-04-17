import React, { useState, useEffect } from 'react'
import './style.css'
import API from "../../utils/API"
import Deck from "../Deck";

function UserPageDeck() {
    const [userData, setUserData] = useState([]);

    useEffect(() => {
        API.findUserDecks().then(res => {
            setUserData(res.data[0])
            console.log(res.data)
        }).catch(err => console.log(err))
    }, [])

    //console.log(userData.deck);
    const deckArr = userData.deck;

    return (
        <>
            <h4>This will display your decks</h4>


            <Deck 
                name={userData.name}
            />

            {/* {userData.deck.map(item => (
            <Deck
                deck = { item }
            />
            ))} */}
        </>
    )
}

export default UserPageDeck;