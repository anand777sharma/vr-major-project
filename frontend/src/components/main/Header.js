import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <>
  {/* Navbar */}
  <nav className="navbar navbar-expand-lg navbar-light bg-white fixed-top">
    <div className="container-fluid">
      <button
        className="navbar-toggler"
        type="button"
        data-mdb-toggle="collapse"
        data-mdb-target="#navbarExample01"
        aria-controls="navbarExample01"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <i className="fas fa-bars" />
      </button>
      <div className="collapse navbar-collapse" id="navbarExample01">
      <a class="navbar-brand mt-2 mt-lg-0" href="#">
        <img
          src={'logo.png'}
          height="30"
          alt="MDB Logo"
          loading="lazy"
        />
      </a>
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <NavLink className="nav-link" to="/main/home">
              HOME
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/main/signup">
              signup
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/main/login">
              login
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/main/contactus">
              contactus
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  {/* Navbar */}
  {/* Navbar */}
</>

  )
}

export default Header