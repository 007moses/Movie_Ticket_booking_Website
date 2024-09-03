import React from 'react'
import poster from '../Assets/Pictures/Garudan-main.jpeg'
import './Garudan.css'
import ReactPlayer from 'react-player'
import { Link } from 'react-router-dom'

const Garudan = () => {
    
  return (
    <div className='container'>
        
        <h1>Garudan</h1>
        <div className='content'>
            <div className='poster'>
                    <img src={poster} alt="" />
            </div>
            
        <div className='details1'>        
          <Link to="/SeatBooking">
          <button type="button" className='btn btn-danger' id='book-ticket'>Book ticket</button>
          </Link>
            
        </div>        
        </div>   
        <div className='trailer'>
                <ReactPlayer url={"https://youtu.be/B2yC1jpAYvQ?si=GsxXNwhX3SFEETTm"}/>
        </div>
    </div>
  )
}

export default Garudan