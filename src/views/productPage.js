import React, { Component } from 'react'
import Layout from './layout'
import db from '../assets/db/db.json'
import {addToBasket, } from '../actions/shoppingbasket'
import Row from '../components/row'
import Col from '../components/col'
import Button from '../components/button'
import { connect } from 'react-redux';

@connect((store) => {
  return {
      shoppingbasket: store.shoppingbasket.shoppingbasket
  };
})
class ProductPage extends Component {

  constructor(props) {
    super(props);
    this.state = {
      currentProduct: null
    }
    this.onSizeChange = this.onSizeChange.bind(this);
  }

  componentDidMount() {
    console.log("eka")
    this.fetchProduct(this.props.params.item)
  }

  onSizeChange(event) {
    console.log(this.props.shoppingbasket)
    let product = this.state.currentProduct
    product.size = event.target.value
    this.setState({currentProduct: product})
  }

  fetchProduct = (product) => {
    console.log("neljäs")
    Object.keys(db.products).forEach(p => {
      if(db.products[p].id === product) {
        db.products[p].size = 29
        this.setState({currentProduct: db.products[p]})
      }
    })
  }



  render() {
    const image = this.state.currentProduct && require("../assets/images/" + this.state.currentProduct.image)
    const discountPrice = this.state.currentProduct && (this.state.currentProduct.price * this.state.currentProduct.discount).toFixed(2)
    return (
    <Layout>
        {this.state.currentProduct && <h3>{this.state.currentProduct.name}</h3>}
        {
          this.state.currentProduct && 
          <Row> 
            <Col colStyle="col-md-6 col-lg-6 col-sm-6 col-xs-12">
              <p style={{whiteSpace: 'pre-line'}}>{this.state.currentProduct.description}</p>
              <p>
                  Hinta: <span className={discountPrice !== 0 ? "old-price" : "no-sale"}>{this.state.currentProduct.price}€</span> {discountPrice !== 0 && <span className="sale-price">{discountPrice}€</span>}
              </p>
              <br />
              <br />
                <table>
                  <tbody>
                  <tr>
                    <td>Valitse koko: </td>
                    <td>
                    <select onChange={this.onSizeChange}>
                      <option value="29">29</option>
                      <option value="30">30</option>
                      <option value="31">31</option>
                      <option value="32">32</option>
                      <option value="33">33</option>
                      <option value="34">34</option>
                      <option value="35">35</option>
                      <option value="36">36</option>
                      <option value="37">37</option>
                      <option value="38">38</option>
                    </select>
                    </td>
                  </tr>
                  <tr><td><br /></td></tr>
                  <tr>
                    <td colSpan="2"><Button style={{padding: '0px'}} action={() => addToBasket(this.state.currentProduct)} text="Lisää ostoskoriin" /></td>
                  </tr>
                  </tbody>
                </table>
            </Col>
            <Col colStyle="col-md-4 col-lg-3 col-sm-6 col-xs-12">
              <img src={image} alt={this.state.currentProduct.name}/>
            </Col>
          </Row>
        }
    </Layout>
    );
  }
}

export default ProductPage;