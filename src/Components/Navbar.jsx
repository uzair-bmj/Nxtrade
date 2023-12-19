import React from 'react'


export default function Navbar() {
  return (
    <>

      <nav className="navbar navbar-expand-lg navbar-light position-absolute" style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: "500" }}>
        <div className="container-fluid ">
          <a className="navbar-brand" style={{ fontSize: "30px", fontWeight: "600", color: "white" }} href="#">NexTrade</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse mt-1" id="navbarSupportedContent" >
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 link " >
              <li className="nav-item ">
                <a className="nav-link active link text-white" style={{borderBottom : '2px solid rgb(114, 137, 240)'}} aria-current="page" href="#">Home</a>
              </li>
              <li className="nav-item ">
                <a className="nav-link  text-white" href="#">About Us</a>
              </li>
              <li className="nav-item dropdown ">
                <a className="nav-link dropdown-toggle  text-white" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Our Services
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><a className="dropdown-item" href="#">Action</a></li>
                  <li><a className="dropdown-item" href="#">Another action</a></li>
                  <li><hr className="dropdown-divider" /></li>
                  <li><a className="dropdown-item" href="#">Something else here</a></li>
                </ul>
              </li>
              <li className="nav-item link ">
                <a className="nav-link link text-white" href="#" tabIndex="-1" aria-disabled="true">Contact Us</a>
              </li>
            </ul>
            <form className="d-flex">
              <input class="form-control me-2 search" type="search" placeholder="Search" aria-label="Search" />
              <i class="fa-solid fa-bag-shopping icon ms-2"></i>
              {/* <button className="btn btn-primary ms-2 " type="submit">OFFERS</button> */}
            </form>
          </div>
        </div>
      </nav>
    </>
  )
}
