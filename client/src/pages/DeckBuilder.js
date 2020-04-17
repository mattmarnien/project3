import React from "react";
import DeckBuilderPage from "../components/DeckBuilderPage/index"
import API from "../utils/API";

function DeckBuilder(props) {
    const handleFormSubmit = event => {
        event.preventDefault();
        API.buildDeck({ name: "sample1", numberOfCards: 5 }).then(() => {
            API.getDeck();
        });
    }

    return (
        <>
            <DeckBuilderPage
                handleFormSubmit={handleFormSubmit}
                userID={props.userID}
            />
        </>
    );
}

export default DeckBuilder;
