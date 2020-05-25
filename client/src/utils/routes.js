
import React, {Component} from 'react';
import { BrowserRouter as Router,  Switch, Route, Redirect} from "react-router-dom";
import {history} from './history'

import Home from '../Pages/Home/Documentos'
import Rascunhos from '../Pages/Home/Rascunhos'
import Cadastro from '../Pages/Register/Cadastro'
import Login from '../Pages/Register/Login'
import Edit from '../Pages/Edit'
import NotFound from '../Pages/NotFound'
import PrivateRoute from './PrivateRoute'


class Routes extends Component {
    render(id) {
        return (
      <Router>
          <Switch>
            <Route exact path="/" component = {Login}  />
            <Route exact path="/cadastrod" component ={ Cadastro}  />
            <PrivateRoute exact path="/home:id?" component ={Home} />
            <PrivateRoute path="/rascunho:id?" component ={Rascunhos} />
            <PrivateRoute path="/edit:id?" component ={Edit} />

            <Route component={NotFound} />
         </Switch>
      </Router>
    );
  }
}


export default Routes