import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from '../src/Components/Header'
import Footer from './Components/Footer'
import Home from './Pages/Home'
import MoviesList from './Components/MoviesList'
import Garudan from './Movies/Garudan'
import SignUp from './Pages/SignUp'
import Login from './Pages/Login'
import {BrowserRouter, Routes, Route } from 'react-router-dom'
import NoMatchRoute from './Components/NoMatchRoute'
import Raayan from '../src/Movies/Raayan'
import SeatBooking from './Pages/SeatBooking'
import Indian2 from './Movies/Indian2'
import Maharaja from './Movies/Maharaja'
import About from './Pages/About'
import Contact from './Pages/Contact'


function App() {
  return (
    <div>    
    <BrowserRouter> 
    <Header/>      
    <Routes>
        <Route path='/home' element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/register' element={<SignUp/>} />     
        <Route path='/login' element={<Login/>} />   
        <Route path='/SeatBooking' element={<SeatBooking/>}/>     
        <Route path='/Garudan' element={<Garudan/>}/>
        <Route path='/Raayan' element={<Raayan/>}/>
        <Route path='/Indian2' element={<Indian2/>}/>
        <Route path='Maharaja' element={<Maharaja/>}/>
        <Route path='*' element={<NoMatchRoute/>}/>        
    </Routes>    
    <Footer/>
    </BrowserRouter>     
    </div>
    
  )
}

export default App
