import React, { useState, useEffect } from 'react'
import './search.css'
import Input from '../Input'
import Button from '../Button'
import DropdownMenu from '../DropdownMenu';
import API from "../../utils/API"
import GameCard from "../GameCard/index"


function Search() {
    // const [cardSearch, setCardSearch] = useState('');
    const [cards, setCards] = useState([]);
    const [filteredCards, setFilteredCards] = useState([])
    const [params, setParams] = useState([['All', 'Units', 'Spells'], ['All', '1', '2', '3', '4', '5+'], ['10', '20', '30']]);
    const labels = ['Type', 'Cost', 'Results'];

    // const [results, setResults] = useState("")
    const [form, setForm] = useState({
        Search: "",
        Type: "",
        Cost: "",
        Results: 10
    })

    useEffect(() => {
        API.getCards()
            .then(res => {
                setCards(res.data)
                console.log(res)
            })
            .catch(err => console.log(err))
    }, [])

    const handleInputChange = event => {
        const { value, name } = event.target;
        setForm({ ...form, [name]: value })
    }

    const handleFormSubmit = event => {
        event.preventDefault();

        console.log(form)

        const newCards = cards.filter(card => card.name.toLowerCase().includes(form.Search))
        newCards.filter(card => card.type.includes(form.Type))
        newCards.filter(card => card.cost === parseInt(form.Cost))

        setFilteredCards(newCards)
    }

    return (
        <div className='row'>
            <form className="singularityInput" onSubmit={handleFormSubmit}>
                <div className='row'>
                    <Input
                        type='text'
                        className='center col s10'
                        name="Search"
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
                            name={labels[index]}
                            handler={handleInputChange}
                        />
                    ))}

                </div>
            </form>

            {filteredCards && filteredCards.slice(0, parseInt(form.Results)).map(card => (
                <GameCard
                    key={card._id}
                    name={card.name}
                    image={require('../assets/cardImages/' + card.image)}
                    attack={card.attack}
                    HP={card.HP}
                    cardBody="hello"
                />
            ))}
        </div>
    )
}
export default Search;