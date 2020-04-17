import React, { useState, useEffect } from 'react'
import './style.css'
import API from "../../utils/API"
import Deck from "../Deck";

function UserPageDeck() {
    const [userData, setUserData] = useState([]);
    const [deckData, setDeckData] = useState([]);

    useEffect(() => {
        API.findUserDecks().then(res => {
            setUserData(res.data[0])
            //console.log(res.data)
            for (let i = 0; i < userData.deck.length; i++) {
                API.findOneDeck(userData.deck).then(result => {
                    setDeckData(result.data);
                })

            }
        }).catch(err => console.log(err))
    }, [])

    //console.log(userData.deck);
    console.log(deckData);
    const deckArr = userData.deck

    return (
        <>
            <h4>This will display your decks</h4>


            <Deck 
                name={userData.name}
                deck={deckArr}
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