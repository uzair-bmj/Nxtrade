import React from 'react'
import Servicecard from './Servicecard'
import sercard from './SerCard'

export default function Skills() {
  return (
    <>
      
        <div>
            <h1 className='text-primary text-center mt-5 fw-bolder'>OUR SERVICES</h1>
            <div className='cardsection mt-4' >
              {sercard.map(
                (items, index)=>{
                  return(
                    <>
                      <Servicecard data = {items}/>
                    </>
                  )
                }
              )}
              

            </div>
            
        </div>
    
    
    </>
  )
}
