import React from 'react'

import './style.css'

const ItemMenu = props =>{
    return (
        <button className="novo"  onClick={props.onClick}>
            <img src={props.src} className="novo"/>
            <span className="novo"> {props.titulo} </span>
        </button>
    )
}

export default ItemMenu