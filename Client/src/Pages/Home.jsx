import React from 'react'
import './Home.css'
import MoviesList from '../Components/MoviesList'

const Home = () => {
  return (
    <div className='home'>     
    <h1>Your Favourite Movies are here !!</h1>                
        <MoviesList/>                   
    </div>
  )
}

export default Home