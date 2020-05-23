
import React, {Component} from 'react';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";

import Home from './Pages/Home/Documentos'
import Rascunhos from './Pages/Home/Rascunhos'
import Cadastro from './Pages/Register/Cadastro'
import Login from './Pages/Register/Login'
import Edit from './Pages/Edit'
import './App.css';
class App extends Component {
 
  render() {
    return (
      <Router>
          <Switch>
              <Route path="/"  component={Login} exact />
              <Route path="/cadastro"  component={Cadastro} />
              <Route path="/edit" component={Edit} />
              <Route path="/home" component={Home} />
              <Route path="/draft" component={Rascunhos} />



          </Switch>
      </Router>
    );
  }
}

export default App;
