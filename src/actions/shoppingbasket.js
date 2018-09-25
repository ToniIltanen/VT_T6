import store from '../store';
import {productAdded, shoppingbasketReseted} from './toaster'

export function addToBasket (item) {
    store.dispatch({
        type: 'SHOPPINGBASKET_ADDITEM',
        payload: item
    });
    productAdded(item);

}

export function resetBasket () {
    store.dispatch({
        type: 'SHOPPINGBASKET_RESET'
    });
    shoppingbasketReseted()
}