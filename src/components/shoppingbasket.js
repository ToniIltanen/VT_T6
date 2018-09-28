import React, { Component } from 'react';
import { connect } from 'react-redux';
import Button from './button'
import {resetBasket} from '../actions/shoppingbasket'
@connect((store) => {
  return {
      shoppingbasket: store.shoppingbasket.shoppingbasket
  };
})

class ShoppingBasket extends Component {

  ProductsInfo = () => {
    let info = null
    if(this.props.shoppingbasket != null) {
      let totalprice = 0
      let totalcount = this.props.shoppingbasket.length
      if(this.props.shoppingbasket.length > 0) {
        this.props.shoppingbasket.forEach((item) => {
          if(item.discount > 0) {
            totalprice += (item.price * item.discount)
          } else {
            totalprice += item.price
          }
        })
        info = <div>
          <span>Tuotteita ostoskorissa: {totalcount} kpl</span><br/>
          <span>Yhteishinta: {totalprice.toFixed(2)} €</span><br /><br />
          <Button style={{padding: '0px', width: '50%'}} link={process.env.PUBLIC_URL + '/verkkokauppa/ostoskori'} text="Kassalle" />
          <Button style={{padding: '0px', width: '50%'}} action={() => resetBasket()} text="Tyhjennä" />
        </div>
      }

    }
    return info
  }
  
  render() {
    let products = this.ProductsInfo()
    return (
        <div>
          {products == null && <span>Ei tuotteita</span>}
          {products != null && products}
        </div>
    );
  }
}

export default ShoppingBasket;
