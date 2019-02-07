import React, { Component } from 'react';
import './Common.css';
import {Button} from 'reactstrap';

class Footer extends Component {
  render() {
    return (
        <footer>footer
           <Button color="success">My reactstrap button</Button>
        </footer>
    );
  }
}

export default Footer;
