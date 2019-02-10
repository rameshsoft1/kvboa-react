import React, { Component } from 'react';
import './App.css';
import Header from './common/Header';
import Footer from './common/Footer';
import Home from './inner-pages/Home';
import About from './inner-pages/About';
import Ourteam from './inner-pages/Ourteam';

import { BrowserRouter as Router, Route } from "react-router-dom";


class App extends Component {
  render() {
    return (
          <Router>
            <div  className="container-fluid p-0">
              <Header></Header>
              <section>
                <Route exact path="/" component={Home} />
                <Route path="/about" component={About} />
                <Route path="/ourteam" component={Ourteam} />
              </section>
              <Footer></Footer>
            </div>
          </Router>
    );
  }
}

export default App;
