import React from 'react'
import {logout} from '../../utils/auth'

import Sair from '../../image/sair.png'
import Novo from "../../image/novo.png"
import Rascunho from "../../image/rascunho.png"
import './style.css'

class Documentos extends React.Component{
    sair=() =>{
        this.props.history.push('/');
        logout(false);

    }

    rascunho = () => {
        this.props.history.push('/rascunho:id')
    }

    edit = () => {
        this.props.history.push('/edit:id')
    }

    render(){
        return(
            <div>
                <header>
                    <button className="novo" onClick={this.rascunho}>
                        <img src={Rascunho} className=" novo"/>
                        <span className="novo"> Seus Rascunhos </span>
                    </button>
                    
                    <button className="novo"  onClick={this.edit}>
                                <img src={Novo} className=" novo"/>
                                <span className="novo"> Novo documento</span>
                    </button>
                    <button className="sair"  onClick={this.sair}>
                                <img src={Sair} className=" novo"/>
                    </button>
                </header>
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