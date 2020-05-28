import React from 'react'

import Fechar from '../../image/fechar.png'
import './style.css'

const Tabela = props =>{
        return(
            <div className="fundo-log" onClick={props.onClose}>
                <div className="modal-log">
                        <button className="fechar"> 
                            <img src={Fechar} style={{width:"20px"}} />
                        </button>
                      <table>
                        <tbody>
                          {props.children}
                        </tbody>
                      </table> 
                </div>
            </div>
        )
}

export default Tabela