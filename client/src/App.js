
import React, {Component} from 'react';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";

import Cadastro from './Pages/Home/Cadastro'
import Login from './Pages/Home/Login'
import './App.css';

class App extends Component {
 
  render() {
    return (
      <Router>
          <Switch>
              <Route path="/"  component={Login} exact />
              <Route path="/cadastro"  component={Cadastro} />

          </Switch>
      </Router>
    );
  }
}

export default App;
