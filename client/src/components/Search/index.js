import React, { useState } from 'react'
import './search.css'
import Input from '../Input'
import Button from '../Button'
import DropdownMenu from '../DropdownMenu';


function Search() {
    const [cardSearch, setCardSearch] = useState([]);
    const handleInputChange = event => {
        const { value } = event.target;
        setCardSearch(value);
        console.log(cardSearch);
    }
    const handleFormSubmit = event => {
        event.preventDefault();
    }
    const searchParameterArr=[['Card Type','Units','Spell'],['Cost', '1', '2', '3', '4', '5 more more'],['anotherthing', 'stuff', 'notstuff', 'things'],['Results', '10', '20', '30']]
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
                        Search <i className="fas fa-search"/></Button>
                </div>
                <div className='row'>
                    {searchParameterArr.map((arr, index) => (
                        <DropdownMenu
                        key = {index}
                        classes='col s2'
                    defaultValue={arr[0]}                    
                    options={arr}                    
                    />
                    ))}
                 
                </div>
            </form>
        </div>
    )
}
export default Search