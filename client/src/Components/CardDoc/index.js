import React, {useState} from 'react'

import Modal from '../Modal'
import './style.css'

const CardDoc = props =>{
    const [IsModalVisible, setIsModalVisible] = useState(false);

    return (
        <div >
            <div className="card-doc">
                <p className="titulo-doc"> {props.titulo} </p>
                <hr/>
                <p className="data"> Criado em: {props.data} -  {props.dia} </p>

                <button className="ver-documento" onClick ={() => setIsModalVisible(true)}>
                    Abrir
                </button>
                
                {IsModalVisible  ? (
                    <Modal onClose={() => setIsModalVisible(false)}
                            titulo={props.titulo}
                           texto={props.texto}
                    />
                ) : null}                   
            </div>
        </div>
    )
}

export default CardDoc