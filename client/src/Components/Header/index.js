import React from 'react'

import Novo from "../../image/novo.png"
import Rascunho from "../../image/rascunho.png"
import './style.css'

const Header = props =>{
    return(
        <header>
            <button className="novo" onClick={props.onClick1}>
                <img src={Rascunho} className=" novo"/>
                <span className="novo"> {props.tituloras} </span>
             </button>
              
             <button className="novo"  onClick={props.onClick2}>
                        <img src={Novo} className=" novo"/>
                        <span className="novo"> {props.titulodoc}</span>
                    </button>
        </header>
    )
}

export default Header