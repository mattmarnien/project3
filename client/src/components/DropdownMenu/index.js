import React, {useEffect} from 'react'
import './dropdownMenu.css'

function DropdownMenu(props) {
    const classes = `input-field ${props.classes}`
 
    useEffect(() => {
        var elems = document.querySelectorAll('select');
    var instances = M.FormSelect.init(elems)
    }, [])
    


console.log(props)
    return (
        <div className={classes}>
            <select>
                {props.options.map((value, index) =>                 
                <option key={index} value={value}>{value}</option>
                )}       
            </select>
        </div>
    )
}

export default DropdownMenu


