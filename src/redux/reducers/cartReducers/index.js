import {
    PRODUCT_CART,
    PRODUCT_CART_ICREMENT,
    PRODUCT_CART_DECREMENT,
    PRODUCT_CART_REMOVE,
    PRODUCT_CART_TOTAL_PRICE,
    PRODUCT_CART_POPUP,
    PRODUCT_CART_DELIVERY,
    PRODUCT_CART_DEFUALT_STATE
} from "./action";

const initialCartState = {
    cart: [],
    totalCount: 0,
    popup: false,
    delivery: {}
};

const cartReducers = (state = initialCartState, action) => {
    switch (action.type) {
        case PRODUCT_CART: {
            const positionThisProductInCart = state.cart.findIndex(
                (val) => val.id === action.payload.id
            );
            if (state.cart.length <= 0) {
                return {...state, cart: [...state.cart, action.payload]};
            } else if (positionThisProductInCart < 0) {
                return {...state, cart: [...state.cart, action.payload]};
            } else {
                state.cart[positionThisProductInCart].count =
                    state.cart[positionThisProductInCart].count + 1;
            }
        }
        // eslint-disable-next-line no-fallthrough
        case PRODUCT_CART_ICREMENT:
            return {
                ...state,
                cart: state.cart.filter((elm) => {
                    if (elm.id === action.payload) {
                        elm.count += 1;
                    }
                    return state;
                }),
            };
        case PRODUCT_CART_DECREMENT:
            return {
                ...state,
                cart: state.cart.filter((elm) => {
                    if (elm.id === action.payload) {
                        elm.count -= 1;
                    }
                    return state;
                }),
            };
        case PRODUCT_CART_REMOVE:
            return {
                ...state,
                cart: state.cart.filter((item) => item.id !== action.payload),
            };
        case PRODUCT_CART_TOTAL_PRICE:
            return {
                ...state,
                totalCount: state.cart.reduce((initialVal, elm) => {
                    const {price, count} = elm;
                    initialVal = initialVal + price * count;
                    return initialVal;
                }, 0),
            };
        case PRODUCT_CART_POPUP:
            return {
                ...state,
                popup: action.payload
            };
        case PRODUCT_CART_DELIVERY:
            return {
                ...state,
                delivery: action.payload
            }
            case PRODUCT_CART_DEFUALT_STATE:
                return initialCartState
        default:
            return state;
    }
};

export default cartReducers;
