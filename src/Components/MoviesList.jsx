import './Movies.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import {Link} from 'react-router-dom'
import Garudan from '../Assets/Pictures/Garudan.avif'
import Indian from '../Assets/Pictures/Indian-2.jpg'
import Maharaja from '../Assets/Pictures/Maharaja.jfif'
import Raayan from '../Assets/Pictures/Raayan-Main.jpg'
import Header from './Header'




const MoviesList = () => {
  return (   
    <div>
      
    <div className='cards'>
      <div class="card" style={{width: "18rem"}}>
  <img src={Garudan} class="card-img-top" alt="Garudan"/>
  <div class="card-body">
    <h5 class="card-title">Garudan</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <Link to="/Garudan"><a href="#" class="btn btn-primary">Book your ticket</a></Link>
  </div>   
  </div>

  <div class="card" style={{width: "18rem"}}>
  <img src={Indian} class="card-img-top" alt="Indian-2" id='indian'/>
  <div class="card-body">
    <h5 class="card-title">Indian-2</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <Link to='/Indian2'><a href="#" class="btn btn-primary">Book your ticket</a></Link>
  </div>   
  </div>

  <div class="card" style={{width: "18rem"}}>
  <img src={Maharaja} class="card-img-top" alt="Maharaja" id='indian'/>
  <div class="card-body">
    <h5 class="card-title">Maharaja</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <Link to='/Maharaja'><a href="#" class="btn btn-primary">Book your ticket</a></Link>
  </div>   
  </div>

  <div class="card" style={{width: "18rem"}}>
  <img src={Raayan} class="card-img-top" alt="Raayan" id='indian'/>
  <div class="card-body">
    <h5 class="card-title">Raayan</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  <Link to='/Raayan'><a href="#" class="btn btn-primary">Book your ticket</a></Link>
  </div>   
  </div>

    </div>
    </div>
     
    
  )
}

export default MoviesList