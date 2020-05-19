
import React, {Component} from 'react';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";

import Cadastro from './Pages/Home/Cadastro'
import Login from './Pages/Home/Login'
import './App.css';

class App extends Component {
  state = {
    response: ''
  };

  componentDidMount() {
    this.callApi()
      .then(res => this.setState({ response: res.express }))
      .catch(err => console.log(err));
  }

  callApi = async () => {
    const response = await fetch('/api/mensagem');
    const body = await response.json();
    if (response.status !== 200) throw Error(body.message);

    return body;
  };

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
