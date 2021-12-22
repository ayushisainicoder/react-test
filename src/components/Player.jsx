import React, { useEffect, useState } from "react";
import axios from "axios";
import Loading from "./Loading";
import ReactTooltip from "react-tooltip";
import {BrowserRouter as Router, Switch, Route, Link, NavLink, } from "react-router-dom";
// import './style.css';

// import './hover.css';

export default function Player() {
  const [state, setstate] = useState();
  
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
  }, [state]);

  
  const styles = {
    border: "2px solid black",
    backgroundColor: "pink",
    margin: "20px 10px",
  };
  return (
    <>         
      <div>
           
        {/* <Router>
          <Switch>
            <Route path=" {detail.first_name} ">
              <Player />
            </Route>
          </Switch>
        </Router> */}
         {/* <NavLink to="/about">About</NavLink>    */}   
        {/* <div className="tooltip">
          Hover over me           
          <span className="tooltiptext">Tooltip text</span>           
        </div>
                   <h1>Player List</h1>            */}
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
                       {/* <th>Last Name</th>            
                        <th>Height Feet</th>            
                        <th>Height Inches</th> */}
                       {/* <th>Team Details</th> */}           
                       {/* <th>Team Id</th>            
                        <th>Weight Pound</th> */}
                               
          </thead>
                 
          <tbody>
                   
            {state?.map((detail, index) => {
              return (
                <tr key={index}>
                   <td>{detail.id}</td>
                  {/* <td>{props.first_name}</td> */} 
                  {/* <NavLink to="/{detail.first_name}">About</NavLink>  */} 
                  <td>
                    {/* <NavLink to="/{detail.first_name}" data-tip data-for="sadFace">                      
                         {detail.first_name} 
                     </NavLink>
                     <ReactTooltip id="sadFace" type="warning" effect="solid">
                       {detail.first_name} {detail.last_name}
                     </ReactTooltip> */}

                    {/* <NavLink to="/{detail.first_name}">
                      {detail.first_name}
                    </NavLink> */}
                    <ul className="list-group">
                      <li className="list-group-item" data-tip data-for="hovering">
                      {/* <NavLink to="/{detail.id}"> i can perform this one also */}
                        <NavLink to="/{detail.first_name}">
                          {detail.first_name}
                        </NavLink>
                      </li>
                      <ReactTooltip id="hovering" place="top" type="warning" effect="solid">
                        {detail.first_name} {detail.last_name}
                      </ReactTooltip>
                    </ul>
                  </td>
                                             
                  {/* <td>{detail.first_name}</td>                                */}
                  {/* <td>{detail.last_name}</td>                                
                                     <td>{detail.height_feet}</td>                               
                                     <td>{detail.height_inches}</td>                                
                                     <td>{detail.team.id}</td>                                
                                     <td>{detail.weight_pounds}</td> */}
                                       
                </tr>
              );
            })}
                   
          </tbody>
             
        </table>
           
        
        {/* <Loading />      */}
      </div>
         
    </>
  );
}
