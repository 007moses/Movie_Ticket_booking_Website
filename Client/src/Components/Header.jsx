import React from 'react'
import './Head.css'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary" id="nav-bar">
      <div className="container-fluid">
        <i><img src="./Assets//Pictures/Website ICON.jfif" height="50px" width="60px"/></i><div style={{padding:"10px", marginRight:"20px"}}>Book My Show</div>       
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0" >
            <li className="nav-item">
              <Link to='/'><a className="nav-link active" id='page' >Home</a></Link>
            </li>
            <li className="nav-item">
              <Link to='/about'><a className="nav-link active" role="button" id='page'>About</a></Link>
             </li>                        
            <li className="nav-item">   
              <Link to='/contact'><a className="nav-link active" role="button" id='page'>
                contact
              </a></Link>
              </li>
            </ul>
              
          <form className="d-flex" role="search" width="400px">
            <Link to="/register">
            <button type="button" className="btn btn-outline-danger" >SignIn</button>
            </Link>            
             <input className="form-control me-2" type="search" placeholder="Movies,theaters" />
            <button className="btn btn-outline-success" type="submit">Search</button> 
          </form>
        </div>
      </div>
    </nav>
    </div> 
   
  )
}

export default Header