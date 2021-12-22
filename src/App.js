


import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import Signup from "./components/Signup";
import Login from "./components/Login";
import Detail from "./components/Detail";
import MessageLogin from './components/MessageLogin';
import MovieList from './components/MovieList';

import "bootstrap/dist/css/bootstrap.css";
import './App.css'


class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Switch>
            <Route path="/signup" component={Signup} />
            <Route path="/login" component={Login} />
           
            <Route exact path="/" component={Home} />
            <Route path="/Detail" component={Detail} />
            <Route path="/MovieList" component={MovieList} />

            <Route exact path="/MessageLogin" component={MessageLogin} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;