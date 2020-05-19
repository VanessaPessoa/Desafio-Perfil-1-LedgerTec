import React from 'react'

import Logo from '../../image/logo.png'
import Card from '../../Components/Card'
import BtnCenter from '../../Components/Button-Center'
import Input from '../../Components/Input'
import './style.css'

class Login extends React.Component{
    prepareCadastrar = () =>{
        this.props.history.push('/cadastro')
    }

    render(){
        return(
            <div className="box">
                <div className="logo">
                    <img className="logo" src={Logo}/>
                </div>
        
                <div>
                    <Card titulo="Login" className="center">
                    <Input className="input" type="email" id="email" 
                        aria-describedby="emailHelp" placeholder="Email" />
                        <Input className="input" type="password" id="password" 
                        aria-describedby="" placeholder="Senha" />
                        <BtnCenter titulo="Entrar"/>
                        <button className="cadastrar" onClick={this.prepareCadastrar}> Cadastrar </button>
                    </Card>
                </div>
             </div>

          
        )
    }
}

export default Login;