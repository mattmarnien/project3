import React, { useState } from 'react'
import './search.css'
import Input from '../Input'
import Button from '../Button'
import DropdownMenu from '../DropdownMenu';
import API from "../../utils/API"
import GameCard from "../GameCard/index"


function Search() {
    const [cardSearch, setCardSearch] = useState('');
    const [cards, setCards] = useState([]);
    const [params, setParams] = useState([['Card Type', 'Units', 'Spell'], ['Cost', '1', '2', '3', '4', '5 more more'], ['anotherthing', 'stuff', 'notstuff', 'things'], ['Results', '10', '20', '30']]);

    const handleInputChange = event => {
        const { value } = event.target;
        setCardSearch(value);
        console.log(cardSearch);
    }
    const handleFormSubmit = event => {
        event.preventDefault();
        if (!cardSearch) {
            API.getCards("")
                .then(res => {
                    console.log(res)
                    setCards(res.data)
                })
                .catch(err => console.log(err))
        } else {
            API.getCards(cardSearch)
                .then(res => {
                    setCards(res.data)
                    console.log(res)
                })
                .catch(err => console.log(err))
        }
    }
console.log(params)
    return (
        <div className='row'>
            <form className="singularityInput" onSubmit={handleFormSubmit}>
                <div className='row'>
                    <Input
                        type='text'
                        className='center col s10'
                        name="cardSearch"
                        value={cardSearch}
                        onChange={handleInputChange}

                        placeholder="Search for a card" />
                    <Button onClick={handleFormSubmit}
                        classes='col s2'>
                        Search <i className="fas fa-search" /></Button>
                </div>
                <div className='row'>
                    {params.map((arr, index) => (
                        <DropdownMenu
                            key={index}
                            classes='col s2'
                            defaultValue={arr[0]}
                            options={arr}
                        />
                    ))}

                </div>
            </form>

            {cards && cards.map(card => (
                <GameCard
                key={card._id}
                name={card.name}
                image={card.image}
                attack={card.attack}
                HP={card.HP}
                />
            ))}
        </div>
    )
}
export default Search;