import React, { Component } from 'react';
import './Common.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


class Header extends Component {
  render() {
    return (
        <div className="row">
        
          <div className="col-md-12 header-top">
              <div className="row">
                <div className="col-md-2"><span className="logo"></span></div>
                <div className="col-md-8 main-title">
                  <h1>
                  KARUR VYSYA BANK OFFICERS ASSOCIATION  
                  </h1>
                </div>
                <div className="col-md-2"><span className="logo2"></span></div>
              </div>
          </div>
          <div className="col-md-12 header-nav">
              <ul>
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>
                    <Link to="/about">About</Link>
                  </li>
                </ul>

                
          </div>
        </div>
    );
  }
}

export default Header;
