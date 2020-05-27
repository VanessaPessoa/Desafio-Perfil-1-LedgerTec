
import React, {Component} from 'react';
import { BrowserRouter as Router,  Switch, Route} from "react-router-dom";

import Home from '../Pages/Home'
import Cadastro from '../Pages/Register/Cadastro'
import Login from '../Pages/Register/Login'
import Edit from '../Pages/Edit'
import NotFound from '../Pages/NotFound'
import PrivateRoute from './PrivateRoute'

class Routes extends Component {
    render() {
        return (
      <Router>
          <Switch>
            <Route exact path="/" component = {Login}  />
            <Route exact path="/cadastro" component ={ Cadastro}  />
            <PrivateRoute exact path="/home:id" component ={Home} />
            <PrivateRoute exact path="/edit:id" component ={Edit} />
            <Route component={NotFound} />
         </Switch>
      </Router>
    );
  }
}


export default Routes