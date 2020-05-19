import React from 'react'

import './style.css'

const Input = props =>{
    return(
        <input className="input-container" placeholder={props.placeholder} type={props.type} onClick={props.onClick} />

    )
}

export default Input