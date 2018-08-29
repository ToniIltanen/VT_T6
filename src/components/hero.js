import React, { Component } from 'react';

class Hero extends Component {

  render() {
    return (
        <div className="hero">
            <img src={this.props.img} alt="Hero"/>
        </div>
    );
  }
}

export default Hero;
