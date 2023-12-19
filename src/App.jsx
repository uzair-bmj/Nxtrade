import React from 'react'
import Navbar from './Components/Navbar'
import "./App.css"
import HeroSection from './Components/HeroSection'
import Skills from './Components/Skillssection/Skills'
import Team from './Components/Team'
import Signup from './Components/Signup'
import Footer from './Components/Footer'

export default function App() {
  return (
    <div style={{backgroundColor : 'black'}}>  
      <Navbar/>
      <HeroSection/>
      <Skills/>
      <Team/>
      <Signup/>
      <Footer/>
    
    </div>
  )
}
