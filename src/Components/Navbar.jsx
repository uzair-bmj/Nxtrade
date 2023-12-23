import React from "react";
import { Link, Outlet } from "react-router-dom";

export default function Navbar() {






  return (
    <>
      <nav
        className="navbar navbar-expand-lg navbar-light position-absolute"
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
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
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
            <form className="d-flex">
              <input
                class="form-control me-2 search"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <Link to="/signup">
                <button
                  className="btn btn-primary mx-2"
                  style={{ borderRadius: "10px" }}
                >
                  SignUp
                </button>
              </Link>


              {/* <i class="fa-solid fa-bag-shopping icon ms-2"></i> */}
            </form>
          </div>
        </div>
      </nav>
      <Outlet />
    </>
  );
}
