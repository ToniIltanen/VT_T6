import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome'

class SocialMedia extends Component {


  getSocialMediaType = (type) => {
    switch(type) {
        case "facebook":
            return <div className="socialMediaIcon"><FontAwesome name='facebook-square'/><strong>12.12.2018</strong></div>
        case "twitter":
            return <div className="socialMediaIcon"><FontAwesome name='twitter-square' /><strong>12.12.2018</strong></div>
        default:
            return null
    }
  }

  render() {
      const mediaIcon = this.getSocialMediaType(this.props.type)
    return (
        <li>
            {mediaIcon} <a href={this.props.link}>{this.props.text}</a>
        </li>
    );
  }
}

export default SocialMedia;
