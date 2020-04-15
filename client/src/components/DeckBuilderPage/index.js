import React, { useState, useEffect } from "react";
import { Col, Row, Container } from "../Grid";
import Button from "../Button";
import "./deckbuilder.css";
import API from "../../utils/API"
import GameCard from "../GameCard/index"

function DeckBuilderPage({ handleFormSubmit }) {
    const [cards, setCards] = useState([]);
    const [deckCards, setDeckCards] = useState([])

    // developer, turret,
    // sniper already jfif
    // privatesec to privatesecurity

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

        // var fruitCount = plant.getAttribute('data-fruit')
        let newCardName = e.target.getAttribute('data-card')
        // const newCard = cards.filter(card => card.name === data)
        setDeckCards([...deckCards, newCardName])
        console.log(deckCards)

    }

    return (
        <>
            <div className="row">


                <div className="col s4">
                    <div className="userInfo">
                        <img className="profilePic" src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/feac120a-4482-4a91-9cee-fce7fbde0dbe/dawwejk-40a4c28d-0e29-49c0-8bea-848ca6b52f71.jpg/v1/fill/w_1024,h_1266,q_75,strp/ashton__c__by_astri_lohne_dawwejk-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTI2NiIsInBhdGgiOiJcL2ZcL2ZlYWMxMjBhLTQ0ODItNGE5MS05Y2VlLWZjZTdmYmRlMGRiZVwvZGF3d2Vqay00MGE0YzI4ZC0wZTI5LTQ5YzAtOGJlYS04NDhjYTZiNTJmNzEuanBnIiwid2lkdGgiOiI8PTEwMjQifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.tuRmJARhtoN9PY1Hmr9HHJoaTQ0J-bly2LMIHVIWj_E" alt="Avatar" />
                        <h6 className="">Username</h6>
                    </div>
                    <hr />
                    <div className="deckSpace">
                        {deckCards && deckCards.map(card => (
                            <p>{card}</p>
                            
                            // <div className="col s6" key={card._id}>
                            //     <GameCard
                            //         name={card.name}
                            //         image={card.image}
                            //         attack={card.attack}
                            //         HP={card.HP}
                            //         cardBody={card.cardBody}
                            //         cost={card.cost}
                            //     onClick={addToDeck}
                            //     />
                            // </div>
                            ))}
                    </div>
                </div>

                <div className="col s8">
                    <h4 className="deckBuilderTitle">Deck Builder</h4>
                    <hr />
                    <div className="sorting">

                    </div>
                    <div className="cardArea">
                        <div className="row">

                            {cards && cards.map(card => (
                                <div className="col s6">
                                    <GameCard
                                        key={card._id}
                                        data-card={card.name}
                                        name={card.name}
                                        image={card.image}
                                        attack={card.attack}
                                        HP={card.HP}
                                        cardBody={card.cardBody}
                                        cost={card.cost}
                                        onClick={addToDeck}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>



                {/* <Button classes='waves-effect waves-light center btn-large' onClick={handleFormSubmit}>Build Deck</Button> */}

            </div>
        </>
    );
}

export default DeckBuilderPage;













