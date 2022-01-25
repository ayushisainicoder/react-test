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

  const [state, setstate] = useState(); 
  const [data, setData] = useState();
  const [loader, setLoader] = useState([]);
  const [page, setPage] = useState(1); 
  // const [pageno, setPage] = useState();
  const [item, setItem] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [hasMore, setHasMore] = useState(false);
    
  
  var options = {
    method: "GET",
    url: "https://free-nba.p.rapidapi.com/players",
    params: { page: page, per_page: "25" },
    headers: {
      "x-rapidapi-host": "free-nba.p.rapidapi.com",
      "x-rapidapi-key": "38e4232f19msh07c40a70d913576p1640d7jsn7cc597f9716e",
    },
  };
  useEffect(() => {
    setLoading(true)
    setError(false) 
    let cancel
    axios
      .request(options)
      .then(function (response) {
          console.log("res",response)
        setstate(response.data.data);
        // setLoader(false)
        setHasMore(response.data.data.length > 0)
        setLoading(false)
        console.log(response.data.data,"setloading Hasmore")
      })
      
      .catch(function (error) {
        console.error(error);
        setError(true)
      });
  }, [page]);
  console.log(state, "player state checking")

  // useEffect(()=>{

  // }, [pageno]);

  const scrollToEnd = () =>{
    setPage(page + 1);
  }

  window.onscroll = function(){
    if(
      window.innerHeight + document.documentElement.scrollTop === document.documentElement.offsetHeight
    ){
      scrollToEnd( )
    }
  }
  
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

  // function loadMoreHandle(e){
  //   console.log(e, "value of e")
  //   let bottom = e.target.scrollHeight - e.target.clientHeight - e.target.scrollTob < 50;
  //   if(bottom){
  //     let page_ = page + 1;
  //     axios(page_)
  //     setLoader(true)
  //     setPage(page_)
  //   }
  // }
  
  // var newarr = state.filter(function(ele){
  //   return (ele.detail.first_name )
  // })
  // console.log(newarr,"newarr")

  return(
    <>
    <div className="container"> 
    <h1 align="left"> <b> NBA Players List </b> </h1>  
    {/* <h3>First Name</h3>    */}
     <div className="col-sm-5 justify-content-center mt-2">
      {loader.length > -1 && state?.map((detail, index) => {
       return(
        <ul align="center" className="list-group">
        <li className="list-group-item" data-tip data-for="hovering">
       
          <Link onClick={handleClick} to={`/Detail/${detail.id}`}>
            {detail.first_name} </Link>
            {/* if {detail.first_name} == {detail.first_name} {detail.last_name}{ */}
            {detail.first_name === detail.first_name 
            ?<ReactTooltip id="hovering" place="top" type="warning" effect="solid" >
            {detail.first_name} {detail.last_name}
          </ReactTooltip>
            :""}
            {/* <ReactTooltip id="hovering" place="top" type="warning" effect="solid" >
            {detail.first_name} {detail.last_name}
          </ReactTooltip> */}
      {/* } */}
          
        </li>
        {console.log(detail.first_name , "valuee of detail")}
      </ul>
       )      
      })}            
     </div>
    </div>
    </>
  )
  // return (
    
  //   <>    
  //   <InfiniteScroll dataLength = {loader.length} next={()=>setPage(page+1)} hasMore={true} >  
  //     {/* <div onScroll={loadMoreHandle} className= "table-wrap"> */}
  //     <div className= "table-wrap">
  //          <h1> <b> NBA Players List </b> </h1>
        
  //       <table style={styles} >
          
  //                
  //         <thead
  //           style={{
  //             backgroundColor: "orange",
  //             border: "1px solid black",
  //             borderSpacing: "5px",
  //           }}
  //         >
           
  //                      <th>Id</th>           
  //                      <th>First Name</th>           
                     
  //                            
  //         </thead>
  //                
  //         <tbody>
  //           {loader.length > -1 && state?.map((detail, index) => {    
  //            {/* {state?.map((detail, index) => { */}
  //             return (
  //               <tr key={index} className={"container"}>
  //                  <td>{detail.id}</td>
  //                  
  //                 <td>
                    
  //                   <ul className="list-group">
  //                     <li className="list-group-item" data-tip data-for="hovering">
                     
                     
                      
  //                       {/* <NavLink onClick={handleClick} to="/detail/"> */}
  //                       <Link onClick={handleClick} to={`/Detail/${detail.id}`}>
  //                       {/* <Link onClick={handleClick} to={`/detail/${detail.id}`}> */}
  //                         {detail.first_name} 
  //                         {/* </Link> */}
  //                         <ReactTooltip id="hovering" place="top" type="warning" effect="solid">
  //                           {detail.first_name} {detail.last_name}
  //                         </ReactTooltip>
  //                       </Link>
  //                     </li>
                      
  //                   </ul>
  //                 </td>
  //                                            
                  
  //                                      
  //               </tr>
  //             );
  //           })}
  //                  
  //         </tbody>
  //            
  //       </table>
  //       {loader}
  //       {/* {isloading && <Loading/>} */}
  //       {/* <Loading />      */}
  //     </div>
  //     </InfiniteScroll>     
  //   </>
  // );
}
