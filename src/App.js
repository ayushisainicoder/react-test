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

// var arr = [23,29,50,45,55,80,18,90,245,14,51]

// function filterApp(){
//   console.log(arr)
//   var newarr = arr.filter((element, index)=>{
//     return( element > 50)
//   })
//   console.log(newarr)
// }
// filterApp()
export default class App extends Component {
  // constructor(props){
  //   super(props)
  //   this.state = {
  //     count: 0
  //   }
  // }


  render() {
    return (
      <>
      <Router>
        <NavBar title = "NBA Players List" home_page = "Home"/>
        <div className="container">
        {/* <Home /> */}
        {/* <Player first_name = "{detail.first_name}"/> */}
        {/* <div>
          <p>You clicked {this.state.count} times</p>
          <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          Click me
        </button> */}
        {/* </div> */}
        <Switch>
            <Route exact path="/" exact component={Home}></Route>
            <Route exact path="/player"  exact component={Player}></Route>
            {/* <Route exact path="/detail/:id"  exact component={Detail}></Route> */}
            <Route exact path="/detail/:id"  exact component={Detail}></Route>
          </Switch>
        </div>
    </Router>
    </>
    )
  }
}
