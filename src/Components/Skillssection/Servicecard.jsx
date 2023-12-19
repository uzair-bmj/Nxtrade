import React from 'react'

export default function Servicecard(props) {
  return (
    <>
      <div className="card" style={{width: "18rem"  }}>
        <img src={props.data.Imgurl} className="card-img-top" alt="..."/>
          <div className="card-body text-white">
            <h5 className="card-title fw-bolder">{props.data.Name}</h5>
            <p className="card-text">{props.data.Des}</p>
            <a href="#" className="btn btn-primary">Explore More</a>
          </div>
      </div>


    </>
  )
}
