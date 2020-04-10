import React, { useState } from 'react'
import './search.css'
import Input from '../Input'
import Button from '../Button'


function Search() {
    const [cardSearch, setCardSearch] = useState([]);
    const handleInputChange = event => {
        const { value } = event.target;
        setCardSearch(value)
        console.log(cardSearch)
    }
    const handleFormSubmit = event => {
        event.preventDefault();
    }

    return (
        <div className='row'>
           
                <form className="singularityInput" onSubmit={handleFormSubmit}>
                    <Input
                        type='text'
                        className='center col s10'
                        name="cardSearch"
                        value={cardSearch}
                        onChange={handleInputChange}

                        placeholder="Search for a card" />
                    <Button  onClick={handleFormSubmit}
                    classes='col s2'>
                        Search <i class="fas fa-search"></i></Button>
                </form>
            
        </div>
    )
}

export default Search