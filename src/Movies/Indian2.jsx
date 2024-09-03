import React from 'react'
import poster from '../Assets/Pictures/Indian-2(main).jpeg'
import main from   '../Assets/Pictures/Raayan-Main.jpg'
import './Indian2.css'
import ReactPlayer from 'react-player'
import { Link } from 'react-router-dom'

const Indian2 = () => {
    
  return (
    <div className='container'>
        
        <h1>Indian-2</h1>
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
                <ReactPlayer url={"https://youtu.be/3bvBUT5pQYY?si=dHWbAxuBz-R4oGWg"}/>
        </div>
    </div>
  )
}

export default Indian2