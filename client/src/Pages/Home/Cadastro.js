import React from 'react'

import Input from '../../Components/Input'
import Logo from '../../image/logo.png'
import Card from '../../Components/Card'
import BtnCenter from '../../Components/Button-Center'
import './style.css'

class Cadastro extends React.Component{
    prepareLogin = () =>{
        this.props.history.push('/')
    }

    render(){
        return(
               <div className="box">
                    <div className="logo">
                        <img className="logo" src={Logo}/>
                    </div>
            
                    <div>
                    <Card titulo="Cadastro" className="cadastro">
                            <Input className="input-container" placeholder=" Nome Completo" type="name" />
                            <Input className="input-container" placeholder="Email" type="email"/>
                            <Input className="input-container" placeholder="Senha" type="password" />
                            <Input className="input-container" placeholder="Confirmar senha" type="password"/>
                        <BtnCenter titulo="Cadastrar" />
                        <button className="voltar" onClick={this.prepareLogin}> Voltar </button>
                    </Card>
                </div>

               </div>
                
        )
    }
}

export default Cadastro