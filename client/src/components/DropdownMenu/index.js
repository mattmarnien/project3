import React from 'react'
import './dropdownMenu.css'

function DropdownMenu(props) {
    const classes = `input-field ${props.classes}`
 

    return (
        <div className={classes}>
            <select>
                {props.options.map((value, index) =>                 
                (<option key={index} value={value}>{value}</option>)
                )}       
            </select>
        </div>
    )
}

export default DropdownMenu


