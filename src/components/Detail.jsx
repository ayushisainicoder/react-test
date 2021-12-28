import React, {useState, useEffect} from 'react'
import Player from './Player'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'
import axios from 'axios';

export default function Detail(props) {

    const [state, setState] = useState();
    
    
    const [player_detail, setPlayer_Detail] = useState(0);
        
    
    let id = window.location.pathname.split("/")[2];
    console.log(id)
    var options = {
      method: "GET",

      url: 'https://free-nba.p.rapidapi.com/players/'+id ,options,
      headers: {
        'x-rapidapi-host': 'free-nba.p.rapidapi.com',
        'x-rapidapi-key': '38e4232f19msh07c40a70d913576p1640d7jsn7cc597f9716e'
      },
    };

    useEffect(() => {
        axios
        .request(options)
        .then(function (response) {
            console.log("response details",response.data)
            setState(response.data);
            
        })
        .catch(function (error) {
            console.error(error);
        });  
    },[]);
    // console.log("state",state.first_name)
    
    
    return(
        <div className="card text-white bg-secondary mb-3" style={{maxWidth: '35rem'}}>
            <div className="card-header"><h2>About Player</h2></div>
            <div className="card-body"> 
                    
                    <h5 className="card-title" >First Name: {state?.first_name} </h5>
                    <h5 className="card-title">Last Name: {state?.last_name} </h5>
                    <h5 className="card-title">Height Feet: {state?.height_feet} </h5>
                    <h5 className="card-title">Height Inches: {state?.inches} </h5>
                    <h5 className="card-title">Team Details:- </h5>
                    <h5 className="card-title">City: {state?.team.city} </h5> 
                    <h5 className="card-title">Division: {state?.team.division}</h5>
                    <h5 className="card-title">Full name: {state?.team.full_name}</h5>
                    <Link to="/Player" className="card-link">Back </Link>
        
            </div>
            </div>
        );

}

//     return (
//         <>
        
//         <table>
//             {/* {Player.map((item)=>{
//                 const {id, first_name, last_name } = item;
//             })} */}
//             <thead>
//                 {/* <th>Id</th>
//                 <th>First Name</th> */}
//             </thead>
//             <tbody>
//                 {/* {state?.map((card, index)=>{ */}
//                     {/* return( */}
//                         <tr >
//                             {/* <td>{card.id}</td>
//                             <td>{card.first_name}</td> */}
//                             <div className="card text-white bg-secondary mb-3" style={{maxWidth: '35rem'}}>
//                             <div className="card-header"><h2>About Player</h2></div>
//                             <div className="card-body"> 
                                
//                                 <h5 className="card-title" >First Name: {state?.first_name} </h5>
//                                 <h5 className="card-title">Last Name: {state?.last_name} </h5>
//                                 <h5 className="card-title">Height Feet: {state?.height_feet} </h5>
//                                 <h5 className="card-title">Height Inches: {state?.inches} </h5>
//                                 <h5 className="card-title">Team Details:- </h5>
//                                 <h5 className="card-title">City: {state?.team.city} </h5> 
//                                 <h5 className="card-title">Division: {state?.team.division}</h5>
//                                 <h5 className="card-title">Full name: {state?.team.full_name}</h5>
//                                 <Link to="/Player" className="card-link">Back </Link>
//                                 {/* </Link>
//                                  ))} */}
//                               </div>
//                             </div>
//                         </tr>
//                     {/* ); */}
//                 {/* })} */}
//             </tbody>
//         </table>
       
//       </>
//     )
// }
