import React, { Component } from 'react';
import Button from './button.js'

class SplashBox extends Component {
  render() {
    return (
    <div className="splashbox">
        <h1>ale on alkanut</h1>
        <p>Nyt kesän hittituoteet jopa 50% alennuksella!</p> 
        <Button text="Sisään" link={process.env.PUBLIC_URL + "/verkkokauppa"}/>
    </div>
    );
  }
}

export default SplashBox;
