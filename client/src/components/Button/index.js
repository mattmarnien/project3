import React from 'react'
import './button.css'



function Button(props) {
    const classes= `btn waves-effect waves-light singularityButton ${props.classes}`  
    
    return (
       
            <button className={classes} {...props}>
                 
            </button>
      
    )
}

export default Button