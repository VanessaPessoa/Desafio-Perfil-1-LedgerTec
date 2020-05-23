import React from 'react'

import Logo from '../../image/logo.png'
import Card from '../../Components/Card'
import BtnCenter from '../../Components/Button-Center'
import './style.css'

class Login extends React.Component{
    
    state ={
        email:'',
        senha:'',
    }

    entrar = () =>{
        console.log('Email:', this.state.email)
        console.log('Senha:', this.state.senha)

    }
    prepareCadastrar = () =>{
        this.props.history.push('/cadastro')
    }

    render(){
        return(
            <div className="box">
                <div className="logo">
                        <img className="logo" src={Logo}/>
                    </div>
                    <div className="cadastro-center">
                        <Card titulo="Login"  >
                            <input className="input-container" type="email" id="email" 
                            aria-describedby="emailHelp" placeholder="Email"
                            value={this.state.email} onChange={e =>this.setState({email: e.target.value})}  />
                            <input className="input-container" type="password" id="password" 
                            aria-describedby="" placeholder="Senha" 
                            value={this.state.senha} onChange={e =>this.setState({senha: e.target.value})} />
                            <BtnCenter titulo="Entrar" onClick={this.entrar}/>
                            <button className="cadastrar" onClick={this.prepareCadastrar}> Cadastrar </button>
                        </Card>
                    </div>
             
             </div>

          
        )
    }
}

export default Login;