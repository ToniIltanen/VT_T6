
import React, { Component } from 'react'
import { connect } from 'react-redux';
import Stepper from 'react-stepper-horizontal'
import Layout from './layout'
import Row from '../components/row'
import Button from '../components/button'
import {updateBasket} from '../actions/shoppingbasket'

@connect((store) => {
  return {
      shoppingbasket: store.shoppingbasket.shoppingbasket
  };
})
class PurchasePage extends Component {

  constructor() {
    super();
    this.state = {
      steps: [{
        title: 'Ostoskori',
      }, {
        title: 'Tilaajan tiedot',
      }, {
        title: 'Maksaminen',
      }],
      currentStep: 0,
    };
    this.onClickNext = this.onClickNext.bind(this);
  }

  deleteItem = (item) => {
    let products = this.props.shoppingbasket
    let deleted = false
    let updatedProducts = [] 
    for(let i = 0; i < products.length; i++) {
      if(products[i].id !== item.id || deleted) {
        updatedProducts.push(products[i])
      } else {
        deleted = true
      } 
    }
    updateBasket(updatedProducts)
    
  }

  onClickNext() {
    const { currentStep } = this.state;
    this.setState({
      currentStep: currentStep + 1,
    });
  }

  mapProducts(products) {
    let items = []
    if(products != null && products.length > 0) {
      let index = 0
      products.forEach((item) => {
       items.push(<tr key={'shoppingItem_' + index}>
         <td>{item.name}</td>
         <td>{item.size}</td>
         <td><Button key={'removeShoppingItem_' + index} action={() => this.deleteItem(item)} text='Poista' /></td>
       </tr>)
       index++
      })
      return items
    }
  }

  render() {
    const { steps, currentStep } = this.state;
    let products = this.mapProducts(this.props.shoppingbasket)
    let totalPrice = 0
    if(products != null && products.length > 0) {
      this.props.shoppingbasket.forEach((item) => {
        if(item.discount > 0) {
          totalPrice += (item.price * item.discount)
        } else {
          totalPrice += item.price
        }
      })
    } 
    return (
      <Layout>
      <h3> Ostoskori </h3>
        <Row>
          {(products != null && products.length > 0) && <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
            <Stepper steps={ steps } activeStep={ currentStep } />
            {currentStep === 0 && <div style={{margin: '30px'}}>
                <p>Ostoskorissasi olevat tuotteet.
                  Voit poistaa ostoskorista tuotteita klikkaamalla POISTA -painiketta.</p>
                <table cellPadding='15px'>
                  <thead>
                    <tr>
                      <th>Tuotenimi</th>
                      <th>Koko</th>
                    </tr>
                  </thead>
                  <tbody>
                    {products}
                    <tr>
                      <td><b>Yhteishinta: {totalPrice.toFixed(2)} €</b></td>
                    </tr>
                  </tbody>
                </table>
              </div>}
              {currentStep === 1 && <div>
                <span>Toka</span>
              </div>}
            <Button style={{width: "200px"}} action={this.onClickNext } text='Seuraava' />
          </div>}
          {(products == null || products.length === 0) && <p>Ei Tuotteita</p>}
        </Row>
      </Layout>
    )
  }
}

export default PurchasePage;