import React, { Component } from 'react'
import Layout from './layout'
import db from '../assets/db/db.json'
import {addToBasket} from '../actions/shoppingbasket'
import Row from '../components/row'
import Col from '../components/col'
import Button from '../components/button'

class CategoryPage extends Component {

  constructor(props) {
    super(props);
    this.state = {
      product: null
    }
  }

  componentDidMount() {
    this.fetchProduct(this.props.params.item)
  }

  fetchProduct = (product) => {
    Object.keys(db.products).forEach(p => {
      if(db.products[p].id === product) {
        this.setState({product: db.products[p]})
      }
    })
  }

  render() {
    const image = this.state.product && require("../assets/images/" + this.state.product.image)
    const discountPrice = this.state.product && (this.state.product.price * this.state.product.discount).toFixed(2)
    return (
    <Layout>
        {this.state.product && <h3>{this.state.product.name}</h3>}
        {
          this.state.product && 
          <Row> 
            <Col colStyle="col-md-6 col-lg-6 col-sm-6 col-xs-12">
              <p style={{whiteSpace: 'pre-line'}}>{this.state.product.description}</p>
              <p>
                  Hinta: <span className={discountPrice !== 0 ? "old-price" : "no-sale"}>{this.state.product.price}€</span> {discountPrice !== 0 && <span className="sale-price">{discountPrice}€</span>}
              </p>
              <br />
              <br />
                <table>
                  <tbody>
                  <tr>
                    <td>Valitse koko: </td>
                    <td>
                    <select>
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
                    <td colspan="2"><Button style={{padding: '0px'}} action={() => addToBasket(this.state.product)} text="Lisää ostoskoriin" /></td>
                  </tr>
                  </tbody>
                </table>
            </Col>
            <Col colStyle="col-md-4 col-lg-3 col-sm-6 col-xs-12">
              <img src={image} alt={this.state.product.name}/>
            </Col>
          </Row>
        }
    </Layout>
    );
  }
}

export default CategoryPage;