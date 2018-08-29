import React, { Component } from 'react';
import Menu from './menu'
import Hero from './hero'
import banner from '../assets/images/banner.jpg'
class Header extends Component {

  render() {
    return (
    <section>
        <Menu />
        <Hero img={banner} />
    </section>
    );
  }
}

export default Header;
