import React, { Component } from 'react';
import Header from '../components/header'
import Footer from '../components/footer'
import Row from '../components/row'
import Col from '../components/col'
import NewsTeaser from '../components/newsTeaser'
import SocialMediaList from '../components/socialMediaList'
import SocialMedia from '../components/socialMedia'
import ShoppingBasket from '../components/shoppingbasket'
import FontAwesomeIcon from 'react-fontawesome'
class Splash extends Component {
  render() {
    return (
    <div className="container-fluid" >
        <Header />
        <Row>
            <Col colStyle="col-md-9 col-lg-9 col-sm-12">
                {this.props.children}
            </Col>
            <Col colStyle="col-md-3 col-lg-3 col-sm-12">
                <h3><FontAwesomeIcon style={{fontSize: '1.2em'}} name='shopping-basket'/>Ostoskori</h3>
                <ShoppingBasket />
                <h3>Sosiaalinen media</h3>
                <SocialMediaList>
                        <SocialMedia type="twitter" link="#" text="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Sed posuere interdum sem. Quisque ligula eros ullamcorper quis, lacinia quis facilisis sed sapien. Mauris varius diam vitae arcu. Sed arcu lectus auctor vitae, consectetuer et venenatis eget velit." />
                        <SocialMedia type="facebook" link="#" text="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Sed posuere interdum sem. Quisque ligula eros ullamcorper quis, lacinia quis facilisis sed sapien. Mauris varius diam vitae arcu. Sed arcu lectus auctor vitae, consectetuer et venenatis eget velit." />
                        <SocialMedia type="twitter" link="#" text="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Sed posuere interdum sem. Quisque ligula eros ullamcorper quis, lacinia quis facilisis sed sapien. Mauris varius diam vitae arcu. Sed arcu lectus auctor vitae, consectetuer et venenatis eget velit." />
                </SocialMediaList>
                <h3>Tapahtumat</h3>
                <NewsTeaser />
            </Col>
        </Row> 
        <Footer />    
    </div>
    );
  }
}

export default Splash;
