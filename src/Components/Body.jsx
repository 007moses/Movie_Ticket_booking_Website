import React from 'react'
import Baaghi from '../Assets/Pictures/baaghi_2.jpg'
import Baahubali from '../Assets/Pictures/baahubali_2.jpg'
import Deadpool from '../Assets/Pictures/Deadpool 3.jpg'
import MoviesList from './MoviesList'


const Body = () => {
  return (
    <div id="carouselExample" class="carousel slide">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="..." class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="..." class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="..." class="d-block w-100" alt="..."/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
  )
}

export default Body