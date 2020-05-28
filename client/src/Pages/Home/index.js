import React from 'react'

import Log from '../../Components/Log'
import Card from '../../Components/CardDoc'
import {logout} from '../../utils/auth'
import Sair from '../../image/sair.png'
import Novo from "../../image/novo.png"
import Item from '../../Components/Item-menu'
import Header from '../../Components/Header'
import './style.css'

class Documentos extends React.Component{
    constructor(props) {
        super(props)
        this.state={
            autorID: '',
            data:[],
            log:[],
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
                const idDoc =res.data.data.id
                this.props.history.push('/edit'+idDoc)
            }
            else if(!res.data.status){
                alert(res.data.message)
            }
        })
    }

    componentDidMount() {
        const id = this.props.match.params.id
        console.log(id)
        fetch('http://localhost:5000/api/documents/documents/'+id)
        .then((res) => res.json())
        .then(findresponse => {
            console.log(findresponse)
            this.setState({
                data: findresponse
            })

        });
    }

    componentDidUpdate() {
        const id = this.props.match.params.id
        console.log(id)
        fetch('http://localhost:5000/api/log/'+id)
        .then((res) => res.json())
        .then(findresponse => {
            console.log(findresponse)
            this.setState({
                log: findresponse
            })
        });
    }


    sair = ()=>{
        logout();
        this.props.history.push('/')
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
                <Log>
                <div>
                    <tr>
                        <th>Id do documento</th>
                        <th> Evento</th>
                        <th> Data</th>
                        <th> Horário</th>
                    </tr>
                    {
                        this.state.log.map(function(item){
                          return (
                            <tr key={item.id}>
                              <td>{item.documentoID}</td>
                              <td>{item.description}</td>
                              <td>{item.dia} </td>
                              <td>{item.createdAt}</td>
                            </tr>
                          );
                        })
                    } 
                </div>
                </Log>                     
                <div>
                   {
                       this.state.data ?
                       this.state.data.map((id)=>
                        <Card titulo={id.title}
                              texto={id.description}
                              data={id.createdAt}
                              dia={id.dia}
                        />
                       )
                       :
                       <h3> Você não tem nenhum documento salvo</h3>
                    }
                </div>
            </div>
        )
    }
}

export default Documentos