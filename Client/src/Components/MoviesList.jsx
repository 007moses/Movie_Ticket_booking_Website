import '../Styles/Movies.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import {Link} from 'react-router-dom'
import Garudan from '../Assets/Pictures/Garudan.avif'
import Indian from '../Assets/Pictures/Indian-2.jpg'
import Maharaja from '../Assets/Pictures/Maharaja.jfif'
import Raayan from '../Assets/Pictures/Raayan-Main.jpg'
// import Header from '../Components/Header.jsx'




const MoviesList = () => {
  return (   
    <div>      
    <div className='cards'>
      <div className="card" style={{width: "18rem"}}>
  <img src={Garudan} className="card-img-top" alt="Garudan"/>
  <div className="card-body">
    <h5 className="card-title">Garudan</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the cards content.</p>
    <Link to="/Garudan"><a href="#" className="btn btn-primary">Book your ticket</a></Link>
  </div>   
  </div>

  <div className="card" style={{width: "18rem"}}>
  <img src={Indian} className="card-img-top" alt="Indian-2" id='indian'/>
  <div className="card-body">
    <h5 className="card-title">Indian-2</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the cards content.</p>
    <Link to='/Indian2'><a href="#" className="btn btn-primary">Book your ticket</a></Link>
  </div>   
  </div>

  <div className="card" style={{width: "18rem"}}>
  <img src={Maharaja} className="card-img-top" alt="Maharaja" id='indian'/>
  <div className="card-body">
    <h5 className="card-title">Maharaja</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the cards content.</p>
    <Link to='/Maharaja'><a href="#" className="btn btn-primary">Book your ticket</a></Link>
  </div>   
  </div>

  <div className="card" style={{width: "18rem"}}>
  <img src={Raayan} className="card-img-top" alt="Raayan" id='indian'/>
  <div className="card-body">
    <h5 className="card-title">Raayan</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the cards content.</p>
  <Link to='/Raayan'><a href="#" className="btn btn-primary">Book your ticket</a></Link>
  </div>   
  </div>

    </div>
    </div>
     
    
  )
}

export default MoviesList