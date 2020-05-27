import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';

import Salvar from '../../image/salvar.png'
import Voltar from '../../image/voltar.png'
import './style.css'
// import { update } from '../../../../back/app/controllers/';

class Home extends React.Component{
    constructor(props) {
        super(props)
        this.state={
            title: '',
            description: '',
            published: false , 
            autorID: '',
            id: '',
        }
        this.update = this.update.bind(this);
        // this.Voltar = this.Voltar.bind(this);
    }


    update = async event =>{
        const documentsID = this.props.match.params.id;
        event.preventDefault();
        const response = await fetch('http://localhost:5000/api/documents/'+ documentsID, {
            method: 'PUT',
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                title: this.state.title, 
                description: this.state.description,
            })
        })
        response.json().then(data=> ({
            data : data,
            status: response.status
        }))
        .then(res=>{
            console.log(res.data);
            this.props.history.goBack()
        })
    }

    voltar = () =>{
        alert("Alterações feitas não serão salvas")
        this.props.history.goBack()
    }

    render(){
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

                            <button className="salvar" onClick={this.update}> 
                                <img src={Salvar} className="salvar"/>
                                <figcaption>Salvar </figcaption>
                            </button>

                            <button className="salvar" onClick ={this.voltar} >
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