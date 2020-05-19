import React from 'react'

import './style.css'

const Card = props =>{
    return(
        <div className="card">
            <p className="titulo">
                {props.titulo}
            </p>
            {props.children}
        </div>
    )
}

export default Card;