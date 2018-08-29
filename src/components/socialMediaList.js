import React, { Component } from 'react';

class SocialMediaList extends Component {

  render() {
    return (
        <ul className="socialmedia">
            {this.props.children}
        </ul>
    );
  }
}

export default SocialMediaList;
