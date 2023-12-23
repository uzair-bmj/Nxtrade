import React from 'react'
import Navbar from './Components/Navbar'
import "./App.css"
import Footer from './Components/Footer'
import Signup from './Components/Signup'
import Login from './Components/Login'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './Components/LandingPage'


export default function App() {
  return (
    <div style={{ backgroundColor: 'black' }}>

      <Navbar />
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/signup' element={<Signup />} />
        
      </Routes>
      <Footer />

    </div>
  )
}
