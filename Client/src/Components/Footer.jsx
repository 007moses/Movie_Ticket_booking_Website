import React from 'react'
import './Footer.css';
import "bootstrap-icons/font/bootstrap-icons.css";


const Footer = () => {
  return (
    <div>
        {/* <footer className='py-1 bg-dark'>
            <p className='text-center text-white mt-1'>
                BookMyShow - 2024-2025, All rights Reserved
            </p>
        </footer> */}

        <footer className='footer'>
            <div className='footer-container'>
              <div className='footer-section'>
                <h3>About us</h3>
                <p>We are your go-to platform for movie ticket booking.with a seamless booking experience. You can reserve your favorite movies and seats effortlessly</p>
              </div>
              <div className='footer-section'>
                <h3>Quick links</h3>
                <ul>
                  <li><a href="/about">About</a></li>
                  <li><a href="/movies">Movies</a></li>
                  <li><a href="/contact">Contact Us</a></li>
                  <li><a href="/faq">FAQ</a></li>
                </ul>
              </div>
              <div className='footer-section'> 
                <h3>Contact</h3>
                <p>Email:moses05112000@gmail.com</p>
                <p>Phone: 07000000000</p>
                <p>Address: No:8,Kamala street, MGR Nagar, Chromet, Chennai-44</p>                
              </div>
              <div className='footer-social'>
                <h3>Follow Us</h3>
                <div className='social-icons'>
                <a href="https://facebook.com"><i className='bi bi-facebook'></i> Facebook</a>
                <a href="https://www.instagram.com/?hl=en"><i className='bi bi-instagram'></i> Instagram</a>
              </div>
              </div>
            </div>
            {/* <div className='footer-bottom'>
              <p>&copy: {new Dat</p>
            </div> */}
        </footer>
    </div>
  )
}

export default Footer