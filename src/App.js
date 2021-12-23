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
import Detail from './components/Detail';
import Loading from './components/Loading';
// import './hover.css';

export default class App extends Component {
  render() {
    return (
      <>
      <Router>
        <NavBar title = "NBA Players List" home_page = "Home"/>
        <div className="container">
        {/* <Home /> */}
        {/* <Player first_name = "{detail.first_name}"/> */}
       
        <Switch>
            <Route exact path="/" exact component={Home}></Route>
            <Route exact path="/player"  exact component={Player}></Route>
            <Route exact path="/detail"  exact component={Detail}></Route>
          </Switch>
        </div>
    </Router>
    </>
    )
  }
}
