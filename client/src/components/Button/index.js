import React from 'react'
import './button.css'
// Takes in a 'classes prop' to add new classes, and any other attributes needed 

function Button(props) {
    const classes= `btn waves-effect waves-light singularityButton ${props.classes}`      
    return (       
            <button className={classes} {...props}>                 
            </button>      
    )
}
export default Button