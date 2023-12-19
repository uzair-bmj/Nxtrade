import React from 'react'

export default function HeroSection() {
  return (
    <>
      <div className='herosection position-relative'>
        
        <img src="/Images/hero.jpg" alt=""  className='heroimg'/>
        <div className='txt text-white'>
        <h1 className='fw-bolder'>NexTrade</h1>
        <p className='fw-bold'>Empowering Trades, Connecting Futuresw</p>
        <button className='btn btn-primary fw-bolder h1'>Explore More</button>
        </div>


      </div>


    </>
  )
}
