import logo from './logo.svg';
import './App.css';
import NavBar from "./components/NavBar";
import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from './components/Home';
import Player from './components/Player';
import PropTypes from 'prop-types'
import Card from './components/Card';
import Players from './components/Home';
import './hover.css';

export default class App extends Component {
  render() {
    return (
      <>
      <Router>
        <NavBar title = "NBA Players List" home_page = "Home"/>
        
        {/* <Home /> */}
        {/* <Player first_name = "{detail.first_name}"/> */}
        <Player />
        {/* <Card /> */}
        
        <Switch>
        <span>Hover over me!</span>
    <div>I will show on hover</div>
        {/* <Player/> */}
            {/* <Route exact path="/about">
              <About />
            </Route> */}
            <Route exact path="/"></Route>
            <Route exact path="/player"></Route>
            <Route exact path="/detail"></Route>
          </Switch>

    </Router>
    </>
    )
  }
}
