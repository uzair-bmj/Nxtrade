import React from 'react'
import { useState, useEffect } from 'react';
import Navbar from './Components/Navbar'
import "./App.css"
import Footer from './Components/Footer'
import Signup from './Components/Signup'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './Components/LandingPage'
import { Data } from './Context/UserDataContext';
import UserData from './Hooks/userData';
import Login from './Components/Login';



export default function App() {


  return (
    <div style={{ backgroundColor: 'black' }}>
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path='/signin' element = {<Login/>}/>
      </Routes>
      <Footer />
    </div>
  )
}
