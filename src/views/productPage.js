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

  fetchCategoryFromJson = (category) => {

    Object.keys(db.categories).forEach(c => {
      if(db.categories[c].id === category) {
        this.setState({category: db.categories[c]})
        return db.categories[c].name
      }
      console.log("inside")
      console.log(typeof(db.categories[c].subcategories) !== 'undefined')
      if(typeof(db.categories[c].subcategories) !== 'undefined') {
        Object.keys(db.categories[c].subcategories).forEach(sub => {
            console.log("Haetaan: " + category + " testataan: " + db.categories[c].subcategories[sub].id)
          if(db.categories[c].subcategories[sub].id === category) {
            this.setState({category: db.categories[c].subcategories[sub]})
            return db.categories[c].name + " - " + db.categories[c].subcategories[sub].name
          }
        })
      }
    })
    return "Not found!"
  }

  render() {
    const category = this.props.params.category;
    return (
    <Layout>
        <h3>{this.fetchCategoryFromJson(category)}</h3>
    </Layout>
    );
  }
}

export default CategoryPage;