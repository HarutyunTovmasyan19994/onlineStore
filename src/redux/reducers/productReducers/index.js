import { combineReducers } from "redux";
import { createBrowserHistory } from "history";
import { connectRouter } from "connected-react-router";
import {
  PRODUCT_SENT,
  PRODUCT_SENT_SUCCESS,
} from "./action";
import detailsReducers from "../detailsReducers";
import categoeyReducers from "../productCategory"
import cartReducers from "../cartReducers"
import orderReducer from '../orderReducers'
import filterReducers from "../filterReducer"

export const history = createBrowserHistory();

const initialState = {
  product: [],
  loading: false,
  error: null,
};

export function appReducers(state = initialState, action) {
  switch (action.type) {
    case PRODUCT_SENT:
      return {
        ...state,
        loading: true,
      };
    case PRODUCT_SENT_SUCCESS:
      return {
        ...state,
        product: action.payload,
        loading: false,
      };
    default:
      return state;
  }
}

const rootReducers = combineReducers({
  app: appReducers,
  details: detailsReducers,
  category:categoeyReducers,
  cart:cartReducers,
  order:orderReducer,
  filter:filterReducers,
  router: connectRouter(history),
});

export default rootReducers;
