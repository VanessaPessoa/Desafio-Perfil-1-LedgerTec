import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';

import Salvar from '../../image/salvar.png'
import Voltar from '../../image/voltar.png'
import './style.css'

class Home extends React.Component{
    constructor(props) {
        super(props)
        this.state={
            title: '',
            description: '',
            published: false , 
            autorID: ''
        }
        this.Salvar = this.Salvar.bind(this);
        // this.Voltar = this.Voltar.bind(this);
    }

    Salvar = async event =>{
        event.preventDefault();
        const response = await fetch('http://localhost:5000/api/documents', {
            method: 'POST',
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                title: this.state.title, 
                description: this.state.description,
                published: true,
            })
        })
        response.json().then(data=> ({
            data : data,
            status: response.status
        }))
        .then(res=>{
            console.log(res)
        })
    //     response.json().then(data => ({
    //         data: data,
    //         status: response.status
    //     })
    // ).then(res => {
    //     if(res.data.status){
    //         alert(res.data.message)
    //     }
    //     else if(!res.data.status){
    //         alert(res.data.message)
    //     }
    // })
    //    console.log(response)
 }


    // handleChange =(event)=>{
    //     const target = event.target;
    //     const {name, value} = target;

    //     this.setState({
    //         [name]:value
    //     })
    // }

    render(){
        console.log("State_", this.state)
        return(
            <div>
                <div className="container">
                    <div className="wrapper">
                        <form className ="form-group">
                            <div className="form-group">
                                <input type="text" 
                                       name="titulo" 
                                       value={this.state.title} 
                                       placeholder="Título"
                                       onChange={e =>this.setState({title: e.target.value})} 
                                       className ="form-control" />
                            </div>

                            <div className="form-group">
                                <textarea rows="25" 
                                          name="content" 
                                          value={this.state.description} 
                                          placeholder="Descrição"
                                          onChange={e =>this.setState({description: e.target.value})} 
                                          className="form-control "/>
                           </div>

                            <button className="salvar" onClick={this.Salvar}> 
                                <img src={Salvar} className="salvar"/>
                                <figcaption>Salvar </figcaption>
                            </button>

                            <button className="salvar" >
                                <img src={Voltar} className="salvar"/>
                                <figcaption > Voltar</figcaption>
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default Home