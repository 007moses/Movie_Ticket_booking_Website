import React from 'react'
import poster from '../Assets/Pictures/Raayan-poster.avif'
import './Raayan.css'
import ReactPlayer from 'react-player'
import { Link } from 'react-router-dom'

const Raayan = () => {
    
  return (
    <div className='container'>
        
        <h1>Raayan</h1>
        <div className='content'>
            <div className='poster'>
                    <img src={poster} alt="" />
            </div>
            
        <div className='details'>
          <Link to="/SeatBooking">
          <button type="button" className='btn btn-danger' id='book-ticket'>Book ticket</button>
          </Link>
            
        </div>        
        </div>   
        <div className='trailer'>
                <ReactPlayer url={"https://youtu.be/qQJJWhh-XRo?si=sd79che5vGfl9qg8"}/>
        </div>
    </div>
  )
}

export default Raayan