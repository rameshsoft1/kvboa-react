import React, { Component } from 'react';
import './Common.css';
import {Button} from 'reactstrap';

class Footer extends Component {
  render() {
    return (
        <footer>
           <div className="row">
                <div className="col-12">
                   <p className="text-center text-light pt-3">Copyright 2014 by KVB. All Rigts Received. Last Update-02/2019 </p>
              </div>
           </div>
        </footer>
    );
  }
}

export default Footer;
