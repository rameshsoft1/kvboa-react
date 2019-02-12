import React, { Component } from 'react';
import './style.css';

class Contact extends Component {
  render() {
    return (
      <div className="contactpage">
          <div className="row contact banner-section">
            
            <div className="col-12 col-md-12 px-0">
              <div className="banner"></div>
            </div>
          </div>

          <div className="row detail">
              <div className="col-12 p-4">
                  <h4>KARUR VISYA BANK OFFICERS ASSOCIATION</h4>
                  <h5>102, First Main Road,KVB Nagar, Karur - 639 002.
                  
                  </h5>
                  <h6>Email : kvboakarur@gmail.com</h6>
                  <h6>Phone : 04324 238058</h6>
              </div>

              <div className="col-12 p-4">
                  <h4> PRESIDENT - D.HARIHARA GUPTHA</h4> 
                  <h6>Email : hhGupta1961@gmail.com</h6>
                  <h6>Phone : +91 98425 36011</h6>
              </div>

               <div className="col-12 p-4">
                  <h4>GENERAL SECRETARY - M.NARASIMHAN</h4> 
                  <h6>Email : yogakvb@gmail.com</h6>
                  <h6>Phone : +91 94433 38058</h6>
              </div>

               <div className="col-12 p-4">
                  <h4>TREASURER - S.RAGHU</h4> 
                  <h6>Email : saraghu216@gmail.com</h6>
                  <h6>Phone : +91 94439 28777</h6>
              </div>

          </div>
    </div>
    );
  }
}

export default Contact;
