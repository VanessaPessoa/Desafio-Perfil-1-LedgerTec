
import React, {Component} from 'react';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";

import Routes from  './routes'
import './App.css';
class App extends Component {
 
  render() {
    return (
      <Routes />
    );
  }
}

export default App;
