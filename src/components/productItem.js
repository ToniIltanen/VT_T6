import React, { Component } from 'react';
import Col from './col';
import Button from './button'
class ProductItem extends Component {
  render() {
    console.log(this.props.img)
    const img = require("../assets/images/" + this.props.img)
    return (
        <Col colStyle={"col-sm-6 col-md-4 col-lg-3"}>
          <div className="product-item">
            <img src={img} alt={this.props.name}/>
            <br />
            <br />
            <span><strong>{this.props.manufacturer}</strong></span>
            <span><strong>{this.props.name}</strong></span>
            <div className="teaserPrice">
              <div className="old-price">{this.props.oldPrice}€</div>
              <div className="sale-price">{this.props.price}€</div>
            </div>
            <Button link="foobar" text="Siirry" />
          </div>
        </Col>
    );
  }
}

export default ProductItem;
