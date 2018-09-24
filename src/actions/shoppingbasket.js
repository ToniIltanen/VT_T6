import store from '../store';

export function addToBasket (item) {
    store.dispatch({
        type: 'SHOPPINGBASKET_ADDITEM',
        payload: item
    });
}