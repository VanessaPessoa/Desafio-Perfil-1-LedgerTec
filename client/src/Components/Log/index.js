import React, {useState} from 'react'

import Tabela from './Tabela'
import './style.css'

const Log = props =>{
    const [IsModalVisible, setIsModalVisible] = useState(false);

    return(
         <div>
            <button className="log" onClick={()=>setIsModalVisible(true)}>
                Exibir tabela de log
            </button>

            {IsModalVisible  ? (
                    <Tabela onClose={() => setIsModalVisible(false)}
                            children ={props.children} />
                ) : null} 
        </div> 
    )
}

export default Log