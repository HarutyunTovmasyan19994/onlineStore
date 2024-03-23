import {
  PRODUCT_CART,
  PRODUCT_CART_ICREMENT,
  PRODUCT_CART_DECREMENT,
  PRODUCT_CART_REMOVE,
  PRODUCT_CART_TOTAL_PRICE,
} from "./action";

const initialCartState = {
  cart: [],
  totalCount: 0,
};

const cartReducers = (state = initialCartState, action) => {
  switch (action.type) {
    case PRODUCT_CART:
      return { ...state, cart: [...state.cart, action.payload] };
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
        return{
          ...state,
          totalCount:state.cart.reduce((initialVal,elm)=>{
            const {price,count} = elm
            initialVal = initialVal + (price * count)
            return initialVal
          },0)
        }

    default:
      return state;
  }
};

export default cartReducers;

