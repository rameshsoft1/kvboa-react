import React, { Component } from 'react';
import './home.css';

class Home extends Component {
  render() {
    return (
          <div className="row home banner-section">
            <div className="col-4 p-0">
              <div className="flash-news p-2 pb-0">
                <h5 className="flashred">FLASH NEWS</h5>
                <h6 className="flashred">10th December 2018</h6>
                <p>
                  It is an established culture of our beloved KVBOA to call the
                  spade as spade and the crow as te crow. Despite of all practical difficulties our
                  organization had successfully conducted 'NAMEAND SHAME' at Madurai $ Virudhunagar on 
                  5th August 2018 to highlight the efforts in the recovery front.
                  It is the first time in the history of our KVBOA.
                </p>
                <div className="quotes p-1">
                    <div><h5>QUOTES OF THE DAY</h5></div>
                    <p>
                      Learn from yesterday, live for today,
                      hope for tomorrow. The important thing is not
                      to stop questioning.
                      <span>
                      - Albert Einstein
                      </span>
                    </p>
                </div>
              </div>
            </div>
            <div className="col-8 p-0">
              <div className="banner"></div>
            </div>
          </div>
    );
  }
}

export default Home;
