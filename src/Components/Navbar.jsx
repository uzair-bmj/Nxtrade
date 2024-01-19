import React from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";

export default function Navbar() {



  const navigate = useNavigate()


  return (
    <>
      <nav
        className="navbar navbar-expand-lg navbar-light position-absolute fixed-top"
        style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: "500" }}
      >
        <div className="container-fluid ">
          <a
            className="navbar-brand"
            style={{ fontSize: "30px", fontWeight: "600", color: "white" }}
            href="#"
          >
            NexTrade
          </a>
          <button
            className="navbar-toggler bg-light"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          // style={{color : 'white'}}
          >

            <span className="navbar-toggler-icon " ></span>
          </button>
          <div
            className="collapse navbar-collapse mt-1"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 link ">
              <Link to="/">
                <li className="nav-item ">
                  <a
                    className="nav-link active link text-white "
                    style={{ borderBottom: "2px solid rgb(114, 137, 240)" }}
                    aria-current="page"
                    href="#"
                  >
                    Home
                  </a>
                </li>
              </Link>
              <li className="nav-item ">
                <a className="nav-link  text-white" href="#about">
                  About Us
                </a>
              </li>
              <li className="nav-item dropdown ">
                <a
                  className="nav-link text-white"
                  href="#services">
                  Our Services
                </a>


              </li>
              <li className="nav-item link ">
                <a
                  className="nav-link link text-white"
                  href="#Contacts"
                >
                  Contact Us
                </a>
              </li>
            </ul>
            <div className="d-flex">
              <input
                class="form-control me-2 search"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />

              <button
                className="btn btn-primary mx-2"
                style={{ borderRadius: "10px" }}
                onClick={() => { navigate('./signup') }}
              >
                SignUp
              </button>
              <button
                className="btn btn-primary mx-2"
                style={{ borderRadius: "10px" }}
                onClick={() => { navigate('./signin') }}
              >
                Signin
              </button>


            </div>
          </div>
        </div>
      </nav>

    </>
  );
}
