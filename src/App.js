import logo from './logo.svg';
import './App.css';
import NavBar from "./components/NavBar";
import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

export default class App extends Component {
  render() {
    return (
      <Router>
        <Routes>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/users">
            <Users />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Routes>
      <div>
        <NavBar/>
      </div>
      </Router>
    )
  }
}
