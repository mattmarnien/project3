import React, {useEffect} from 'react'
import M from "materialize-css";
import "materialize-css/dist/css/materialize.min.css";
import './dropdownMenu.css'

function DropdownMenu(props) {
    const classes = `input-field ${props.classes}`
 
    useEffect(() => {
        var elems = document.querySelectorAll('select');
    var instances = M.FormSelect.init(elems)
    }, [])
    
    return (
        <div className={classes}>
           <label className="active" htmlFor={props.name}>{props.name}</label>
            <select name={props.name} onChange={props.handler}>
                {props.options.map((value, index) =>                 
                <option key={index} value={value}>{value}</option>
                )}
            </select>
        </div>
    )
}

export default DropdownMenu;


