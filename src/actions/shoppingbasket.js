import store from '../store';
import {productAdded, shoppingbasketReseted, productUpdated, shoppingbasketOrder} from './toaster'
import { browserHistory } from 'react-router'

export function addToBasket (item) {
    store.dispatch({
        type: 'SHOPPINGBASKET_ADDITEM',
        payload: item
    });
    productAdded(item);
}

export function updateBasket (products) {
    store.dispatch({
        type: 'SHOPPINGBASKET_UPDATE',
        payload: products
    });
    productUpdated();
}

export function resetBasket () {
    store.dispatch({
        type: 'SHOPPINGBASKET_RESET'
    });
    shoppingbasketReseted()
}

export function submitOrder () {
    store.dispatch({
        type: 'SHOPPINGBASKET_ORDER'
    });
    browserHistory.push(process.env.PUBLIC_URL + "/verkkokauppa")
    setTimeout(() => {
        shoppingbasketOrder()
    }, 1000)
    
}