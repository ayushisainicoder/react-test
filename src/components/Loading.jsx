// import React,{useEffect,useState} from "react";

// function Loading(props) {
//   const [content, setContent] = useState();
//   const loadData = async () => {
//     setContent(props.content);
//     console.log(content, "content")
//   };
//   useEffect(() => {
//     loadData();
//   }, []);
  
//   return (
//       <>
//   <div className="loading"></div>
//   {console.log("It's working")}
//   </>
//   )
// }

// export default Loading;

// import React, {useState, useEffect} from 'react'

// export default function Loading() {

// const page = 0;

//   const [loader, setLoder] = useState([]);
//   const [page, setPage] = useState(page);

//   useEffect(()=>{

//   }, [page]);

//   const scrollToEnd = () =>{
//     setPage(page+1);
//   }

//   window.onscroll = function(){
//     if(
//       window.innerHeight + document.documentElement.scrollTop === document.documentElement.offsetHeight
//     ){
//       scrollToEnd(  )
//     }
//   }

//   return (
//     <div>
      
//     </div>
//   )
// }

