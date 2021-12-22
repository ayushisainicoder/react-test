import React, {useState, useEffect} from 'react'
import Player from './Player'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'
import axios from 'axios';

export default function Card(props) {

    const [state, setState] = useState();

    var options = {
      method: "GET",
      url: 'https://free-nba.p.rapidapi.com/players/%7Bid%7D',
      headers: {
        'x-rapidapi-host': 'free-nba.p.rapidapi.com',
        'x-rapidapi-key': '38e4232f19msh07c40a70d913576p1640d7jsn7cc597f9716e'
      },
    };

    useEffect(() => {
        axios
        .request(options)
        .then(function (response) {
            console.log(response.data.data);
        })
        .catch(function (error) {
            console.error(error);
        });  
    }, []);

    return (
        <>
        <table>
            <thead>
                <th>Id</th>
                <th>First Name</th>
            </thead>
            <tbody>
                {state?.map((card)=>{
                    // return(
                        <tr>
                            <td>{card.id}</td>
                            <td>{card.first_name}</td>
                        </tr>
                    // );
                })}
            </tbody>
        </table>
        {/* <div className="card text-white bg-secondary mb-3" style={{maxWidth: '35rem'}}>
            <div className="card-header">About Player</div>
            <div className="card-body">
                <h5 className="card-title" >First Name:  </h5>
                <h5 className="card-title">Last Name: </h5>
                <h5 className="card-title">Height: </h5>
                <h5 className="card-title">Team Details: </h5>
                <h5 className="card-title">Team Details - City</h5>
                <h5 className="card-title">Team Details - Division</h5>
                <h5 className="card-title">Team Details - City</h5>
            </div>
            </div> */}
      </>
    )
}
