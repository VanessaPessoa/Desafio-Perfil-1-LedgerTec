import React from 'react'

import Card from '../../Components/Card'
import BtnCenter from '../../Components/Button-Center'
import './style.css'

class Cadastro extends React.Component{
    constructor(props) {
        super(props)
        this.state={
            nome: '',
            email: '',
            senha: '' , 
        }
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit = async event =>{
        event.preventDefault();
        const response = await fetch('http://localhost:5000/api/user/', {
            method: 'POST',
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(this.state)
        })
        response.json().then(data => ({
            data: data,
            status: response.status
        }))
        .then(res => {
            if(res.data.status){
                alert(res.data.message)
            }
            else if(!res.data.status){
                alert(res.data.message)
            }
        })
    }

    prepareLogin = () =>{
        this.props.history.push('/')
    }

    render(){
        return(
            <div className="box">
                <div className="cadastro-center">
                    <Card titulo="Cadastro" >                
                        <input className="input-container" 
                                placeholder=" Nome Completo" 
                                type="name" 
                                value={this.state.nome} 
                                onChange={e =>this.setState({nome: e.target.value})} />

                        <input className="input-container" 
                                placeholder="Email" 
                                type="email"
                                value={this.state.email} 
                                onChange={e =>this.setState({email: e.target.value})} />
    
                        <input className="input-container" 
                                placeholder="Senha" type="password" 
                                value={this.state.senha} 
                                onChange={e =>this.setState({senha: e.target.value})} />
                              
                        <BtnCenter titulo="Cadastrar" onClick={this.handleSubmit} />
                        <button className="cadastrar" onClick={this.prepareLogin}> Login </button>                         
                    </Card>
                </div>
            </div>
        )
    }
}

export default Cadastro