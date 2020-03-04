import React, { Component } from 'react';
import './Common.css';
import {Button} from 'reactstrap';

class Footer extends Component {
  render() {
    return (
        <footer>
           <div className="row">
                <div className="col-12">
                   <p className="text-center text-light pt-3">Copyright 2014 by KVBOA. All Rights Received. </p>
              </div>
           </div>
        </footer>
    );
  }
}

export default Footer;
