const initialState = {
    shoppingbasket: []
}

export default function reducer (state = initialState, action) {
    switch (action.type) {
        case 'SHOPPINGBASKET_ADDITEM': {
            console.log('jee')
            return {...state, shoppingbasket: [...state.shoppingbasket, action.payload]};
        }
        default: {
            return state;
          }
    }
}