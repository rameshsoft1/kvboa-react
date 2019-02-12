import React, { Component } from 'react';
import './Common.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


class Header extends Component {
  render() {
    return (
        <div className="row">
        
          <div className=" col-md-12 header-top px-0">
              <div className="row">
                <div className="col-3 col-md-2 py-3"><span className="logo my-2"></span></div>
                <div className="col-6 col-md-8 main-title">
                  <h1>
                  KARUR VYSYA BANK OFFICERS ASSOCIATION  
                  </h1>
                </div>
                <div className="col-3 col-md-2  py-3"><span className="logo2 my-2"></span></div>
              </div>
          </div>
          <div className="col-md-12 header-nav px-0">
              
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>

              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                  <li className="nav-item">
                    <Link className="nav-link" to="/">Home</Link> <span className="sr-only">(current)</span>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/about">About</Link>
                  </li>
                  <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      Membership
                    </a>
                    
                    <div className="dropdown-menu" aria-labelledby="navbarDropdown">           
                      <Link className="dropdown-item" to="/about">Apply Online</Link>
                      <Link className="dropdown-item" to="/about">ET Membership online</Link>
                    </div>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/ourteam">Our Team</Link>
                  </li>
                  <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      Information
                    </a>
                    
                    <div className="dropdown-menu" aria-labelledby="navbarDropdown">           
                      <Link className="dropdown-item" to="/about">Service Conditions</Link>
                      <Link className="dropdown-item" to="/about">Gallery</Link>
                      <Link className="dropdown-item" to="/about">Circulars</Link>
                      <Link className="dropdown-item" to="/about">Calculator</Link>
                    </div>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/contact">Contact Us</Link>
                  </li>
                </ul>
             
              </div>
            </nav>
              
            
          </div>
        </div>
    );
  }
}

export default Header;
