import React, { Component } from 'react'
import Layout from './layout'
import ProductItem from '../components/productItem'
import Row from '../components/row'
import db from '../assets/db/db.json'
class CategoryPage extends Component {

  constructor(props) {
    super(props);
   this.state = {
    category: []
    };
  }

  fetchProductsFromJson = (category) => {
    let products = []
    Object.keys(db.products).forEach(p => { 
      if(db.products[p].category_id === category) {
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
    return products
  }

  fetchCategoryNameFromJson = (category) => {

    let found = "Not found!"
    Object.keys(db.categories).forEach(c => {
      if(db.categories[c].id === category) {
        found = db.categories[c].name
      }

      if(typeof(db.categories[c].subcategories) !== 'undefined') {
        Object.keys(db.categories[c].subcategories).forEach(sub => {
          if(db.categories[c].subcategories[sub].id === category) {
            found = db.categories[c].name + "  -  " + db.categories[c].subcategories[sub].name
          }
        })
      }
    })
    return found
  }



  render() {
    const c = this.props.params.category
    let products = this.fetchProductsFromJson(c)
    return (
    <Layout>
        <h3>{this.fetchCategoryNameFromJson(c)}</h3>
        <Row>
            {products}
        </Row>
    </Layout>
    );
  }
}

export default CategoryPage;