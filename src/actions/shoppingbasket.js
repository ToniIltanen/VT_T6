import store from '../store';
import {productAdded, shoppingbasketReseted, productUpdated} from './toaster'

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