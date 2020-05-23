import React from 'react'

import Rascunho from '../../image/rascunho.png'
import Novo from '../../image/novo.png'
import Header from '../../Components/Header'
import './style.css'

class Rascunhos extends React.Component{
    render(){
        return(
            <div>
                <Header tituloras="Seus documentos" titulodoc="Novo documento" />
                <div className="seus_documentos">
                    <p className="seus_documentos">
                        SEUS RASCUNHOS...
                    </p>
                </div>
            </div>
        )
    }
}

export default Rascunhos