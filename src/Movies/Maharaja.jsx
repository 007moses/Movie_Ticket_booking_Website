import React from 'react'
import poster from '../Assets/Pictures/Maharaja1.jfif'
import './Maharaja.css'
import ReactPlayer from 'react-player'
import { Link } from 'react-router-dom'

const Maharaja = () => {
    
  return (
    <div className='container'>        
        <h1>Maharaja</h1>
        <div className='content'>
            <div className='poster'>
                    <img src={poster} alt="" />
            </div>
            
        <div id='details'>
          <Link to="/SeatBooking">
          <button type="button" className='btn btn-danger' id='book-ticket'>Book ticket</button>
          </Link>
            
        </div>        
        </div>   
        <div className='trailer'>
                <ReactPlayer url={"https://youtu.be/UsW95hX8GTQ?si=fEUwc7nAdUv-Vxyo"}/>
        </div>
    </div>
  )
}

export default Maharaja