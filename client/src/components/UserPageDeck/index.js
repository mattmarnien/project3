import React, { useState, useEffect } from 'react'
import './style.css'
import API from "../../utils/API"
import Deck from "../Deck";
function UserPageDeck() {
    const [userData, setUserData] = useState([]);
    const deckArr = [];
    useEffect(() => {
        API.findUserDecks().then(res => {
            setUserData(res.data[0])
        }).catch(err => console.log(err))
    }, [])
    const dummyArr =['1243', '1123']
     
    // }

    console.log(userData)
    return (
        // userData.deck ? <> {userData.deck.map(deck => { <Deck deck={deck} />})} </> : 
        // <> <Deck deck={dummyArr} /> </>
        <Deck ></Deck>
    )
        
              
      
}
export default UserPageDeck;