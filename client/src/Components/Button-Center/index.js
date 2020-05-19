import React from 'react'

import './style.css'

const BtnCenter = props =>{
    return(
        <button className="btn-center" onClick={props.onClick}>
            {props.titulo}
        </button>
    )
}

export default BtnCenter