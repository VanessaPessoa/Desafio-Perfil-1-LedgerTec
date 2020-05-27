import React from 'react'

import {logout} from '../../utils/auth'
import Sair from '../../image/sair.png'
import Novo from "../../image/novo.png"
import Item from '../../Components/Item-menu'
import Header from '../../Components/Header'
import Rascunho from "../../image/rascunho.png"
import './style.css'

class Documentos extends React.Component{
    constructor(props) {
        super(props)
        this.state={
            autorID: '',
        }
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit = async event =>{
        const id = this.props.match.params.id

        event.preventDefault();
        const response = await fetch('http://localhost:5000/api/documents/', {
            method: 'POST',
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({autorID: id })
        })
        response.json().then(data => ({
            data: data,
            status: response.status
        }))
        .then(res => {
            if(res.data.status){
                alert("Documento criado")
                const idDoc =res.data.log[0]
                this.props.history.push('/edit'+idDoc)


            }
            else if(!res.data.status){
                alert(res.data.message)
            }
        })
    }

    novo = () => {
        this.props.history.push('/edit')
    }

    sair = ()=>{
        logout();
        this.props.history.push('/')
    }
  
    rascunho = () => {
        const id = this.props.match.params.id;
        console.log(id)
        this.props.history.push('/rascunho'+id)

    }

    render(){
        return(
            <div>
                <Header >
                    <Item onClick={this.sair} src={Sair} titulo="Sair" />
                    <Item onClick={this.handleSubmit} titulo="Criar novo documento" src={Novo} />
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