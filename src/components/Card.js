import React, {useState, useEffect} from 'react'
import Player from './Player'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'

export default function Card(props) {

    // const PlayerDetail = () =>{
    //     const player_detail = useSelector(state => state.PlayerListDetails.player_detail)
    // }
    const [player_detail, setPlayerDetail] = useState()
    console.log(player_detail)

    // useEffect(() => {
    //     effect
    //     return () => {
    //         cleanup
    //     }
    // }, [input])
    return (
        <>
        
        <div class="card text-white bg-secondary mb-3" style={{maxWidth: '35rem'}}>
            <div class="card-header">About Player</div>
            <div class="card-body">
                <h5 class="card-title">First Name: {player_detail.first_name}</h5>
                <h5 class="card-title">Last Name: </h5>
                <h5 class="card-title">Height: </h5>
                <h5 class="card-title">Team Details: </h5>
                <h5 class="card-title">Team Details - City</h5>
                <h5 class="card-title">Team Details - Division</h5>
                <h5 class="card-title">Team Details - City</h5>
            </div>
            </div>
      </>
    )
}
