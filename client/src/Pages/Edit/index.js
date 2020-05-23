import React from 'react'
import CKEditor from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic'
import 'bootstrap/dist/css/bootstrap.css';

import Salvar from '../../image/salvar.png'
import Voltar from '../../image/voltar.png'
import './style.css'

class Home extends React.Component{
    state={
        titulo: '',
        content: '',
    }

    handleChange =(event)=>{
        const target = event.target;
        const {name, value} = target;

        this.setState({
            [name]:value
        })
    }

    handleCkeditorState=(event, editor) =>{
        const data = editor.getData();
        this.setState({
            content: data
        });
        // console.log(data);
    }

    render(){
        console.log("State_", this.state)
        return(
            <div>
                <div className="container">
                    <div className="wrapper">
                        <form className ="form-group">
                            <div className="form-group">
                                {/* <label>Título:</label> */}
                                <input type="text" name="titulo" value={this.state.titulo} placeholder="Título"
                                       onChange={this.handleChange} className ="form-control" />
                            </div>
                            <div className="form-group">
                                {/* <label> Descrição:</label> */}
                                <textarea rows="25" name="content" value={this.state.content} placeholder="Descrição"
                                       onChange={this.handleChange}  className="form-control "/>
                           </div>
                            <button className="salvar"> 
                                <img src={Salvar} className="salvar"/>
                                <figcaption>Salvar </figcaption>
                            </button>
                            <button className="salvar">
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