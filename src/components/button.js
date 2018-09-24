import React, { Component } from 'react';
import { browserHistory } from 'react-router'

class Button extends Component {


  performAction = () => {
    if(this.props.link != null) {
      browserHistory.push(this.props.link)
    }
    if(this.props.action != null) {
      this.props.action()
    }
  }

  render() {
    return (

    <div className="btn" style={this.props.style}>
        <button onClick={() => this.performAction()}>{this.props.text}</button>
    </div>
    );
  }
}

export default Button;
