import React, { Component } from 'react'
import Layout from './layout'
import ProductItem from '../components/productItem'
import Row from '../components/row'
import db from '../assets/db/db.json'

class MainPage extends Component {

  constructor(props) {
    super(props);
    this.state = {
      discountForMen: [],
      discountForWomen: []
    }
  }

  componentDidMount() {
    this.fetchMensDiscountProducts()
    this.fetchWomensDiscountProducts()
  }

  fetchProductsFromJson = (category) => {
    let products = []
    Object.keys(db.products).forEach(p => {
      if(db.products[p].discount > 0) {
        Object.keys(db.categories).forEach(c => {
          if(db.categories[c].id === category) {
            Object.keys(db.categories[c].subcategories).forEach(sub => {
              if(db.categories[c].subcategories[sub].id === db.products[p].category_id) {
                products.push(<ProductItem key={db.products[p].id} 
                  id={db.products[p].id}
                  category={db.products[p].category_id}
                  name={db.products[p].name} 
                  discount={db.products[p].discount} 
                  price={db.products[p].price} 
                  img={db.products[p].image} 
                  manufacturer={db.products[p].manufacturer} />)
              }
            })
          }
        })
      }
    })
    return products
  }

  fetchMensDiscountProducts = () => {
    const men = this.fetchProductsFromJson("82d7c3e2-0643-4625-a982-e640d6c3a82a")
    this.setState({discountForMen: men})
  }

  fetchWomensDiscountProducts = () => {
    const women = this.fetchProductsFromJson("287dda99-1e30-4136-ad9b-6b615b9c369d")
    this.setState({discountForWomen: women})
  }

  render() {
    const discount_m = this.state.discountForMen
    const discount_w = this.state.discountForWomen
    return (
    <Layout>
      <h3>Tarjoustuotteet - Naiset</h3>
      <Row>
        {discount_w.length > 0 ? discount_w :<p>Ei tuotteita</p>}
      </Row>

      <h3>Tarjoustuotteet - Miehet</h3>
      <Row>
        {discount_m.length > 0 ? discount_m :<p>Ei tuotteita</p>}
      </Row>
    </Layout>
    );
  }
}

export default MainPage;
