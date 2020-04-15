import React from "react";
import DeckBuilderPage from "../components/DeckBuilderPage/index"
import API from "../utils/API";

function DeckBuilder() {
    const handleFormSubmit = event => {
        event.preventDefault();
        API.getDeck();
    }

    return (
        <>
        <DeckBuilderPage 
            handleFormSubmit= {handleFormSubmit}
        />
        </>
    );
}

export default DeckBuilder;
