
import React, {Component} from 'react';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";

import Cadastro from './Pages/Register/Cadastro'
import Login from './Pages/Register/Login'
import Home from './Pages/Home'
import './App.css';
class App extends Component {
 
  render() {
    return (
      <Router>
          <Switch>
              <Route path="/"  component={Login} exact />
              <Route path="/cadastro"  component={Cadastro} />
              <Route path="/home" component={Home} />

          </Switch>
      </Router>
    );
  }
}

export default App;
