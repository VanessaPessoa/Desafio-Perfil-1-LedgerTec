
import React, {Component} from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect} from "react-router-dom";

import{isAuthenticated} from './auth'
import Home from './Pages/Home/Documentos'
import Rascunhos from './Pages/Home/Rascunhos'
import Cadastro from './Pages/Register/Cadastro'
import Login from './Pages/Register/Login'
import Edit from './Pages/Edit'


const PrivateRoute = ({component: Component, ...rest}) =>(
    <Route 
        { ...rest} 
        render={props =>
            isAuthenticated() ? (
                 <Component {...props} />
            ) : (
             <Redirect to={{pathname:'/', state :{from:props.location}}} />
            )
    } />
);



class Routes extends Component {
 
    render() {
        return (
      <Router>
          <Switch>
              <Route path="/"  component={Login} exact />
              <Route path="/cadastro"  component={Cadastro} />
              <PrivateRoute path="/home" component={Home} />
              <PrivateRoute path="/draft" component={Rascunhos} />
              <PrivateRoute path="/edit" component={Edit} />

          </Switch>
      </Router>
    );
  }
}

export default Routes;
