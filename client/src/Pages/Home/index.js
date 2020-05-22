import React from 'react'
import CKEditor from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic'
// import 'bootstrap/dist/css/bootstrap.css';

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
                                <label>Título:</label>
                                <input type="text" name="titulo" value={this.state.titulo}
                                       onChange={this.handleChange} className ="form-control" required />
                            </div>
                            <div className="form-group">
                                <label> Descrição:</label>
                                {/* <textarea cols="30" rows="23" name="content" value={this.state.content}
                                       onChange={this.handleChange}  className="form-control" required/> */}
                                <CKEditor
                                    editor={ClassicEditor}
                                    onInit ={
                                        editor=>{
                                    }}
                                    config={
                                        {
                                            ckfinder:{
                                                uploadUrl:'localhost:8000/upload'
                                            }
                                        }
                                    }

                                    onChange={this.handleCkeditorState}
                                />
                           </div>
                            <button required> Salvar</button>
                        </form>
                    </div>
                </div>
            </div>
        )
        
    }
}

export default Home