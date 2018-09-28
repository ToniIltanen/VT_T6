const initialState = {
    shoppingbasket: []
}

export default function reducer (state = initialState, action) {
    switch (action.type) {
        case 'SHOPPINGBASKET_ADDITEM': {
            return {...state, shoppingbasket: [...state.shoppingbasket,action.payload]};
        }
        case 'SHOPPINGBASKET_RESET': {
            return {...state, shoppingbasket: []};
        }
        case 'SHOPPINGBASKET_UPDATE': {
            return {...state, shoppingbasket: action.payload};
        }
        case 'SHOPPINGBASKET_ORDER': {
            return {...state, shoppingbasket: []};
        }
        default: {
            return state;
          }
    }
}