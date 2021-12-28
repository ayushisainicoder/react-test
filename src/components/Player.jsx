import React, { useEffect, useState } from "react";
import axios from "axios";
import Loading from "./Loading";
import ReactTooltip from "react-tooltip";
import {BrowserRouter as Router, Switch, Route, Link, NavLink, } from "react-router-dom";
import PropTypes from 'prop-types'
import Detail from './Detail'
import Card from './Card'
import InfiniteScroll from "react-infinite-scroll-component";

// import './style.css';

// import './hover.css';

export default function Player(props) {

  // const page = 0;
  const [state, setstate] = useState();
  const [data, setData] = useState();
  const [loader, setLoder] = useState([]);
  const [page, setPage] = useState();
  // const [pageno, setPage] = useState();
    
  
  var options = {
    method: "GET",
    url: "https://free-nba.p.rapidapi.com/players",
    params: { page: "0", per_page: "100" },
    headers: {
      "x-rapidapi-host": "free-nba.p.rapidapi.com",
      "x-rapidapi-key": "38e4232f19msh07c40a70d913576p1640d7jsn7cc597f9716e",
    },
  };
  useEffect(() => {
    axios
      .request(options)
      .then(function (response) {
          console.log("res",response)
        setstate(response.data.data);
        
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);
  console.log(state, "player state checking")

  // useEffect(()=>{

  // }, [pageno]);

  // const scrollToEnd = () =>{
  //   setPage(pageno + 1);
  // }

  // window.onscroll = function(){
  //   if(
  //     window.innerHeight + document.documentElement.scrollTop === document.documentElement.offsetHeight
  //   ){
  //     scrollToEnd( )
  //   }
  // }
  
  const styles = {
    border: "2px solid black",
    backgroundColor: "pink",
    margin: "20px 10px",
  };
  
  
  const handleClick = ()=>{
    console.log("It was clicked:",data);
    // let newData = data.detail.first_name;
    // setData(newData)
    
  }

 

  return (
    
    <>    
    <InfiniteScroll dataLength = {Player.length} next={()=>setPage(page+1)} hasMore={true}>  
      <div>
           <h1> <b> NBA Players List </b> </h1>
        
        <table style={styles}>
          
                 
          <thead
            style={{
              backgroundColor: "orange",
              border: "1px solid black",
              borderSpacing: "5px",
            }}
          >
           
                       <th>Id</th>           
                       <th>First Name</th>           
                     
                             
          </thead>
                 
          <tbody>
            {/* {loader.length > 0 && state?.map((detail, index) => {     */}
            {state?.map((detail, index) => {
              return (
                <tr key={index}>
                   <td>{detail.id}</td>
                   
                  <td>
                    
                    <ul className="list-group">
                      <li className="list-group-item" data-tip data-for="hovering">
                     
                     
                      
                        {/* <NavLink onClick={handleClick} to="/detail/"> */}
                        <Link onClick={handleClick} to={`/Detail/${detail.id}`}>
                        {/* <Link onClick={handleClick} to={`/detail/${detail.id}`}> */}
                          {detail.first_name} 
                          {/* </Link> */}
                          <ReactTooltip id="hovering" place="top" type="warning" effect="solid">
                            {detail.first_name} {detail.last_name}
                          </ReactTooltip>
                        </Link>
                      </li>
                      
                    </ul>
                  </td>
                                             
                  
                                       
                </tr>
              );
            })}
                   
          </tbody>
             
        </table>
           
        {/* {isloading && <Loading/>} */}
        {/* <Loading />      */}
      </div>
      </InfiniteScroll>     
    </>
  );
}
