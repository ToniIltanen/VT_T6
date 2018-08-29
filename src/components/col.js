import React, { Component } from 'react';

class Col extends Component {

  render() {
    return (
        <div className={'column col-xs-12 ' + this.props.colStyle}>
            {this.props.children}
        </div>
    );
  }
}

export default Col;
