import React, { Component } from 'react';
import { browserHistory } from 'react-router'

class Button extends Component {

  jumpTo = (url) => {
    browserHistory.push(url)
  }

  render() {
    const url = this.props.link
    return (
    <div className="btn">
        <button onClick={() => this.jumpTo(url)}>{this.props.text}</button>
    </div>
    );
  }
}

export default Button;
