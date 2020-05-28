import React from 'react'

import Fechar from '../../image/fechar1.png'
import './style.css'

const Modal = props =>{
    return (
        <div className="fundo" onClick={props.onClose}>
            <div className="modal-doc">
                <button className="close" onClick={props.onClose}>
                    <img src={Fechar} style={{width:"30px"}} />
                </button>
                <h2 className="titulo-modal"> {props.titulo} </h2>
                <p className="texto"> {props.texto} </p>
            </div>
        </div>
         
    )
}

export default Modal