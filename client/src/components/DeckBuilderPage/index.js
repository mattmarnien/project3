import React, { useState, useEffect } from "react";
import { Col, Row, Container } from "../Grid";
import Button from "../Button";
import "./deckbuilder.css";
import API from "../../utils/API"
import GameCard from "../GameCard/index"

function DeckBuilderPage({ handleFormSubmit, userID }) {
    const [cards, setCards] = useState([]);
    const [deckCards, setDeckCards] = useState([])
    const [cardIds, setCardIds] = useState([])
    const [AZ, setAZ] = useState(false)

    useEffect(() => {
        API.getCards()
            .then(res => {
                setCards(res.data)
                console.log(res)
            })
            .catch(err => console.log(err))
    }, [])

    const addToDeck = e => {

        console.log("clicked")
        let newCardName = e.target.getAttribute('data-card')
        let newCardId = e.target.getAttribute('data-id')
        const identicalCards = cardIds.filter(card => card === newCardId)
        if (identicalCards.length > 2) {
            return alert("You can't add more than 3 of the same card.")
        }

        setCardIds([...cardIds, newCardId])
        setDeckCards([...deckCards, newCardName])
        console.log(deckCards)
        console.log(cardIds)
    }
    const buildNewDeck = () => {
        const cardMessage = document.getElementById("cardMessage")
        if (deckCards.length < 20) return alert(cardMessage.innerHTML)

        let answer = window.confirm("Are you sure?")

        if (!answer) return;

        let deckName = window.prompt("What do you want to call this deck?")

        const newDeck = {
            name: deckName,
            numberOfCards: cardIds.length,
            card: cardIds
        }
        const userDeck = {
            newDeck: newDeck,
            userID: userID
        }
        //console.log(newDeck)
        API.buildDeck(userDeck)
            .then(res => {
                console.log(res)
                setDeckCards([])
                setCardIds([])
            })
            .catch(err => console.log(err))
    }

    const removeCard = e => {
        const newDeck = deckCards.filter(card => card !== e.target.getAttribute('data-name'))
        const newIds = cardIds.filter(card => card !== e.target.getAttribute('data-id'))
        setDeckCards(newDeck)
        setCardIds(newIds)
    }

    const sortCards = e => {
        e.preventDefault();
        if (!AZ) {
            cards.sort((a, b) => a.name.localeCompare(b.name));
            setAZ(true)
        } else {
            cards.sort((a, b) => b.name.localeCompare(a.name));
            setAZ(false)
        }
    }

    return (
        <>
            <div className="row">


                <div className="col s4">
                    <div className="userInfo">

                        <img className="profilePic" src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/feac120a-4482-4a91-9cee-fce7fbde0dbe/dawwejk-40a4c28d-0e29-49c0-8bea-848ca6b52f71.jpg/v1/fill/w_1024,h_1266,q_75,strp/ashton__c__by_astri_lohne_dawwejk-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTI2NiIsInBhdGgiOiJcL2ZcL2ZlYWMxMjBhLTQ0ODItNGE5MS05Y2VlLWZjZTdmYmRlMGRiZVwvZGF3d2Vqay00MGE0YzI4ZC0wZTI5LTQ5YzAtOGJlYS04NDhjYTZiNTJmNzEuanBnIiwid2lkdGgiOiI8PTEwMjQifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.tuRmJARhtoN9PY1Hmr9HHJoaTQ0J-bly2LMIHVIWj_E" alt="Avatar" />
                        <h6 className="">Username</h6>
                        {deckCards.length < 20 ?
                            <>
                                <Button disabled classes='waves-effect waves-light center btn-large' onClick={buildNewDeck}>Complete Deck</Button>
                                <h6 id="cardMessage">You must add at least {deckCards.length < 20 ? 20 - deckCards.length : 0} more {deckCards.length === 19 ? "card." : "cards."}</h6>
                            </> :
                            <Button classes='waves-effect waves-light center btn-large' onClick={buildNewDeck}>Complete Deck</Button>}
                    </div>
                    
                    <div className="row deckSpace">
                        {deckCards && deckCards.map(card => (
                            <>
                                <div className="col deckEntry">
                                    <h5 style={{ fontWeight: "900" }}>{card}</h5>
                                    <p data-name={card} onClick={removeCard} className="deleteCard">✖</p>
                                </div>
                            </>
                        ))}
                    </div>
                </div>

                <div className="col s8">

                    <h4 className="deckBuilderTitle">Deck Builder</h4>
                    
                    <div className="sorting">
                        <Button onClick={sortCards} classes='col s2' style={{ marginLeft: "5px", marginTop: "5px"}}>Sort Cards</Button>
                    </div>
                    <div className="row cardArea">


                        {cards && cards.map(card => (
                            <div className="col s12 m6 l3 cardDiv">
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
                                    onClick={addToDeck}
                                />
                            </div>
                        ))}

                    </div>
                </div>
            </div>
        </>
    );
}

export default DeckBuilderPage;













