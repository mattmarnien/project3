import React, {useState, useEffect} from "react";
import { Col, Row, Container } from "../Grid";
import Button from "../Button";
import "./deckbuilder.css";

function DeckBuilderPage({handleFormSubmit}) {
    const [cards, setCards] = useState([]);

    useEffect(() => {
        
    })


    return (
        <>

           <Button classes='waves-effect waves-light center btn-large' onClick={handleFormSubmit}>Build Deck</Button>
        </>
    );
}

export default DeckBuilderPage;













