import React from 'react'


import Header from '../../Components/Header'
import './style.css'

class Documentos extends React.Component{
    render(){
        return(
            <div>
                <Header tituloras="Seus rascunhos" titulodoc="Novo documento" />
                
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