import React from 'react'

import Logo from '../../image/logo.png'
import Card from '../../Components/Card'
import BtnCenter from '../../Components/Button-Center'
import './style.css'

class Cadastro extends React.Component{
    state={
        nome: '',
        email: '',
        senha: '',
        repetirsenha:''
    }
    
    cadastrar = () =>{
       if(!this.state.senha || !this.state.nome || !this.state.email){
           alert("Todos os campos precisam ser preenchido")
       }else if(this.state.senha === this.state.repetirsenha){
            console.log('Email:', this.state.email)
            console.log('Nome:', this.state.nome)
            console.log('Senha', this.state.senha)
       }
       else{
            alert("Os valores digitados em senha precisam ser iguais")
       }
    }
    prepareLogin = () =>{
        this.props.history.push('/')
    }


    render(){
        return(
               <div className="box">
                    <div className="logo">
                        <img className="logo" src={Logo}/>
                    </div>
                    <div className="cadastro-center">
                        <Card titulo="Cadastro" >
                                <input className="input-container" placeholder=" Nome Completo" type="name" 
                                value={this.state.nome} onChange={e =>this.setState({nome: e.target.value})} />
                                <input className="input-container" placeholder="Email" type="email"
                                value={this.state.email} onChange={e =>this.setState({email: e.target.value})} />
                                <input className="input-container" placeholder="Senha" type="password" 
                                value={this.state.senha} onChange={e =>this.setState({senha: e.target.value})} />
                                <input className="input-container" placeholder="Confirmar senha" type="password"
                                value={this.state.repetirsenha} onChange={e =>this.setState({repetirsenha: e.target.value})} />
                            <BtnCenter titulo="Cadastrar" onClick={this.cadastrar} />
                            <button className="cadastrar" onClick={this.prepareLogin}> Login </button>
                        </Card>
                    </div>
               </div>
                
        )
    }
}

export default Cadastro