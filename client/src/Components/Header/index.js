import React from 'react'
import {Route} from 'react-router-dom'

import {logout} from '../../utils/auth'
import Sair from '../../image/sair.png'

import './style.css'


class Header extends React.Component{
      render(){
        return(
            <header>
                {this.props.children}
        </header>
        )
    }
}

export default Header