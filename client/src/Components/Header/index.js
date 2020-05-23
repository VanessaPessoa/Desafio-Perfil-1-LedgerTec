import React from 'react'

import './style.css'

const Header = props =>{
    return(
        <header>
           <p className="nome"> ASDD</p>
           {props.children}
        </header>
    )
}

export default Header