import React, { Component } from 'react';
import SplashBox from '../components/splashBox'

class Splash extends Component {
  
  render() {
    return (
    <div className="splash" style={{backgroundImage: `url(${require('../assets/images/splash.jpg')})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat'}}>
        <SplashBox/>     
    </div>
    );
  }
}

export default Splash;
