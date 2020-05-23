import React from 'react'

import Rascunho from '../../image/rascunho.png'
import Novo from '../../image/novo.png'
import Header from '../../Components/Header'
import './style.css'

class Documentos extends React.Component{
    render(){
        return(
            <div>
                <Header>
                    <button className="novo">
                           <img src={Rascunho} className=" novo"/>
                        <span className="novo"> Seus rascunhos</span>
                    </button>
                    <button className="novo">
                        <img src={Novo} className=" novo"/>
                        <span className="novo"> Criar novo documento</span>
                    </button>
                </Header>
                <div className="seus_documentos">
                    <p className="seus_documentos">
                        SEUS DOCUMENTOS...
                    </p>

                </div>
            </div>
        )
    }
}

export default Documentos