import React from 'react'
import './input.css'

function Input(props) {
    
    return (
    
            <div className="input-field singularityInput">
                <input {...props}/>
            </div>
         
    )
}

export default Input