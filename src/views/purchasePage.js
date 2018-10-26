
import React, { Component } from 'react'
import { connect } from 'react-redux';
import Stepper from 'react-stepper-horizontal'
import Layout from './layout'
import Row from '../components/row'
import Button from '../components/button'
import {updateBasket, submitOrder} from '../actions/shoppingbasket'

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
      name: "",
      address: "",
      postalcode: "",
      phone: "",
      email: "",
      card: "",
      cardHolder: "",
      sec: ""
    };
    this.onClickNext = this.onClickNext.bind(this);
    this.onClickBack = this.onClickBack.bind(this);
    this.onNameChange = this.onNameChange.bind(this);
    this.onAddressChange = this.onAddressChange.bind(this);
    this.onPostalChange = this.onPostalChange.bind(this);
    this.onPhoneChange = this.onPhoneChange.bind(this);
    this.onEmailChange = this.onEmailChange.bind(this);
    this.onCardChange = this.onCardChange.bind(this);
    this.onCardHolderChange = this.onCardHolderChange.bind(this);
    this.onSecChange = this.onSecChange.bind(this);
  }

  onNameChange(event) {
    this.setState({name: event.target.value})
  }

  onAddressChange(event) {
    this.setState({address: event.target.value})
  }
  onPostalChange(event) {
    this.setState({postal: event.target.value})
  }
  onPhoneChange(event) {
    this.setState({phone: event.target.value})
  }
  onEmailChange(event) {
    this.setState({email: event.target.value})
  }
  onCardChange(event) {
    this.setState({card: event.target.value})
  }
  onCardHolderChange(event) {
    this.setState({cardHolder: event.target.value})
  }
  onSecChange(event) {
    this.setState({sec: event.target.value})
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

  onClickBack() {
    const { currentStep } = this.state;
    this.setState({
      currentStep: currentStep - 1,
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
         <td>{item.discount !== 0 ? (item.discount * item.price).toFixed(2) : item.price} €</td>
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
          {(products != null && products.length > 0) && <div className="col-xs-10 col-sm-12 col-md-12 col-lg-12">
            <Stepper steps={ steps } activeStep={ currentStep } />
            {currentStep === 0 && <div style={{margin: '30px'}}>
                <table className='table-sm' cellPadding='15px' style={{margin: '0 auto'}}>
                  <thead className='thead-dark'>
                    <tr>
                      <th scope="col">Tuotenimi</th>
                      <th scope="col">Koko</th>
                      <th scope="col">Hinta</th>
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
                <table className='table-sm' cellPadding='15px' style={{margin: '0 auto'}}>
                  <tbody>
                    <tr>
                        <td>Nimi:</td>
                        <td><input onChange={this.onNameChange} value={this.state.name} type='text' /></td>
                    </tr>
                    <tr>
                        <td>Osoite:</td>
                        <td><input onChange={this.onAddressChange} value={this.state.address} type='text' /></td>
                    </tr>
                    <tr>
                        <td>Postinumero:</td>
                        <td><input onChange={this.onPostalChange} value={this.state.postal} type='text' /></td>
                    </tr>
                    <tr>
                        <td>Puhelinnumero:</td>
                        <td><input onChange={this.onPhoneChange} value={this.state.phone} type='text' /></td>
                    </tr>
                    <tr>
                        <td>Sähköposti:</td>
                        <td><input onChange={this.onEmailChange} value={this.state.email} type='email' /></td>
                    </tr>
                  </tbody>
                </table>
              </div>}
              {currentStep === 2 && <div>
                <table className='table-sm' cellPadding='15px' style={{margin: '0 auto'}}>
                  <tbody>
                    <tr>
                        <td>Maksukortin numero:</td>
                        <td><input onChange={this.onCardChange} value={this.state.card} type='text' /></td>
                    </tr>
                    <tr>
                        <td>Kortinhaltijan nimi:</td>
                        <td><input onChange={this.onCardHolderChange} value={this.state.cardHolder} type='text' /></td>
                    </tr>
                    <tr>
                        <td>Varmennenumero:</td>
                        <td><input onChange={this.onSecChange} value={this.state.sec} type='text' /></td>
                    </tr>
                  </tbody>
                </table>
              </div>}
              <table className='table' style={{margin: '0 auto', width: '320px'}}><tr>
              {currentStep !== 0 && <td><Button style={{width: "160px"}} action={this.onClickBack} text='Edellinen' /></td>} 
              {currentStep < 2 && <td><Button style={{width: "160px"}} action={this.onClickNext } text='Seuraava' /></td> }
              {currentStep > 1 && <td><Button style={{width: "160px"}} action={() => submitOrder() } text='Vahvista tilaus' /></td> }
           </tr></table>
          </div>}
          {(products == null || products.length === 0) && <p>Ei Tuotteita</p>}
        </Row>
      </Layout>
    )
  }
}

export default PurchasePage;