import React, {useEffect, useState} from 'react';
import axios from 'axios';
// import './hover.css';

export default function Player(props) {
    const [state, setstate] = useState();

//     const [showText, setShowText] = useState(false)
//   const handleMouseEnter = e => {
//     e.target.style.background = "grey"
//     setShowText(true)
//   }
//   const handleMouseLeave = e => {
//     e.target.style.background = "orange"
//     setShowText(false)
//   }


    var axios = require("axios").default;

var options = {
  method: 'GET',
  url: 'https://free-nba.p.rapidapi.com/players',
  params: {page: '0', per_page: '25'},
  headers: {
    'x-rapidapi-host': 'free-nba.p.rapidapi.com',
    'x-rapidapi-key': '38e4232f19msh07c40a70d913576p1640d7jsn7cc597f9716e'
  }
};

useEffect(() => {
    axios.request(options).then(function (response) {
        
        setstate(response.data.data)
    }).catch(function (error) {
        console.error(error);
    });
}, [state])

// const a = {
//     backgroundColor: "yellow",
//     padding: "20px",
//     display: "none",
// }

// span:hover + a {
//     display: block;
//   }

const styles = {
    border: '2px solid black',
    backgroundColor: "pink",
    margin:"20px 0px",
    
    
   }
    return (
        <div>
            <h1>Player List</h1>
            <table style={styles}> 
        <thead style={{backgroundColor:"orange", border:'1px solid black', borderSpacing:"5px"}}>
            <th>Id</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Height Feet</th>
            <th>Height Inches</th>
            {/* <th>Team Details</th> */}
            <th>Team Id</th>
            <th>Weight Pound</th>
            
        </thead>
        <tbody>
        {state?.map((detail)=>{
            
                        return(
                            <tr key={detail.id}>
                                <td>{detail.id}</td>
                                {/* <td>{props.first_name}</td> */}
                                <td>{detail.first_name}</td>
                                <td>{detail.last_name}</td>
                                <td>{detail.height_feet}</td>
                                <td>{detail.height_inches}</td>
                                <td>{detail.team.id}</td>
                                <td>{detail.weight_pounds}</td>
                            </tr>
                        );
                    })}
        </tbody>
    </table> 
    {/* <div className="App">
      <button
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className="button"
      >
        Hover over me
      </button>
      {showText && <p className="message">Now you can see me!</p>}
    </div> */}
    {/* <span>Hover over me!</span>
    <div>I will show on hover</div> */}
        </div>
    )
}
