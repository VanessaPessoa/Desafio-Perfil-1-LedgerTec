import React from 'react'

import Card from '../../Components/Card'
import BtnCenter from '../../Components/Button-Center'
import './style.css'

class Login extends React.Component{
    
    constructor(props) {
        super(props)
        this.state={
            email: '',
            senha: ''  
        }
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    
    handleSubmit = async event =>{
        event.preventDefault();

        fetch('http://localhost:5000/api/user/auth', {
            method: 'POST',
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(this.state)
        })
        
    }
    prepareCadastrar = () =>{
        this.props.history.push('/cadastro')
    }

    render(){
        return(
            <div className="box">
                    <div className="cadastro-center">
                        <Card titulo="Login"  >
                            <input className="input-container" 
                                   type="email" 
                                   id="email" 
                                   placeholder="Email"
                                   value={this.state.email} 
                                   onChange={e =>this.setState({email: e.target.value})}  />

                            <input className="input-container" 
                                   type="password" 
                                   id="password" 
                                   placeholder="Senha" 
                                   value={this.state.senha} 
                                   onChange={e =>this.setState({senha: e.target.value})} />
                                   
                            <BtnCenter titulo="Entrar" onClick={this.handleSubmit}/>
                            <button className="cadastrar" onClick={this.prepareCadastrar}> Cadastrar </button>
                        </Card>
                    </div>
             
             </div>

          
        )
    }
}

export default Login;