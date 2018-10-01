import React, { Component } from 'react';
import Col from './col';
import Button from './button'

class ProductItem extends Component {
  render() {
    const img = require("../assets/images/" + this.props.img)
    const discountPrice = this.props.discount !== 0 ? (this.props.price * this.props.discount).toFixed(2) : 0
    return (
        <Col colStyle={"col-sm-6 col-md-4 col-lg-3"}>
          <div className="product-item">
            <img src={img} alt={this.props.name}/>
            <br />
            <br />
            <span><strong>{this.props.manufacturer}</strong></span>
            <span><strong>{this.props.name}</strong></span>
            <div className="teaserPrice">
              <div className={discountPrice !== 0 ? "old-price" : "no-sale"}>{this.props.price}€</div>
              {discountPrice !== 0 && <div className="sale-price">{discountPrice}€</div>}
            </div>
            <Button link={process.env.PUBLIC_URL + '/verkkokauppa/' + this.props.category + '/' + this.props.id} text="Tuotetiedot" />
          </div>
        </Col>
    );
  }
}

export default ProductItem;
