import React, {useState, useEffect} from 'react'
import Player from './Player'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'
import axios from 'axios';

export default function Card(props) {

    const [state, setState] = useState();
    // const [player, setplayer_detail] = useState();
    // setplayer_detail(player_detail)
    // const player_detail = useState(
    //     state => state.PlayerList.player_detail
    // )
    // const [player, setplayer_detail] = useState();
    // setplayer_detail({ First_Name: {card.first_name} })

    // const Playerdetail = () => {
    //      const player_detail = [state, Playerlistdetail.player_detail] = useState()
    // }
    // console.log(player_detail,"player_Detail")
    
    const [player_detail, setPlayer_Detail] = useState(0);
        
    // function playerlistdetail(){
    //     setPlayer_Detail(player_detail)
    // }
    let id = window.location.pathname.split("/")[2];
    console.log(id)
    var options = {
      method: "GET",
      url: 'https://free-nba.p.rapidapi.com/players/'+id,
      headers: {
        'x-rapidapi-host': 'free-nba.p.rapidapi.com',
        'x-rapidapi-key': '38e4232f19msh07c40a70d913576p1640d7jsn7cc597f9716e'
      },
    };

    useEffect(() => {
        axios
        .request(options)
        .then(function (response) {
            console.log("response details",response)
            setState(response.data.data);
        })
        .catch(function (error) {
            console.error(error);
        });  
    }, []);
    
    
    // useEffect(() => {
    //     effect
    //     return () => {
    //         cleanup
    //     }
    // }, [input])

    return (
        <>
        <table>
            {/* {Player.map((item)=>{
                const {id, first_name, last_name } = item;
            })} */}
            <thead>
                {/* <th>Id</th>
                <th>First Name</th> */}
            </thead>
            <tbody>
                {state?.map((card, index)=>{
                    return(
                        <tr key={index}>
                            {/* <td>{card.id}</td>
                            <td>{card.first_name}</td> */}
                            <div className="card text-white bg-secondary mb-3" style={{maxWidth: '35rem'}}>
                            <div className="card-header"><h2>About Player</h2></div>
                            <div className="card-body"> 
                                
                                <h5 className="card-title" >First Name: {card.first_name} </h5>
                                <h5 className="card-title">Last Name: {card.last_name} </h5>
                                <h5 className="card-title">Height Feet: {card.height_feet} </h5>
                                <h5 className="card-title">Height Inches: {card.inches} </h5>
                                <h5 className="card-title">Team Details:- </h5>
                                <h5 className="card-title">City: {card.team.city} </h5> 
                                <h5 className="card-title">Division: {card.team.division}</h5>
                                <h5 className="card-title">Full name: {card.team.full_name}</h5>
                                
                                {/* </Link>
                                 ))} */}
                              </div>
                            </div>
                        </tr>
                    );
                })}
            </tbody>
        </table>
       
      </>
    )
}
