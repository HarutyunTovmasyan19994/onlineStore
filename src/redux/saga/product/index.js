import {
  call,
  apply,
  takeEvery,
  put,
  take,
  select,
  fork,
} from "redux-saga/effects";
import {
  PRODUCT_SENT,
  PRODUCT_SENT_SUCCESS,
} from "../../reducers/productReducers/action";
import {
  PRODUCT_DETAILS_SUCCESS,
  PRODUCT_DETAILS_FAILURE,
  PRODUCT_DETAILS,
} from "../../reducers/detailsReducers/action";
import { PRODUCT_CATEGORY_CLOTHES } from "../../reducers/productCategory/action";
import { LOCATION_CHANGE } from "connected-react-router";
import { matchPath } from "react-router";
import { getRouteConfig } from "../../../router";
import { MAIN_ROUTE, PRODUCTS_DETAILS_ROUTE } from "../../../router/action";
import {FILTER_BY_PRICE,FILTER_BY_MAX_MINI_PRICE,FILTER_BY_TITLE} from "../../reducers/filterReducer/action"


export function* loadProductDetails({ payload }) {
  const { id } = payload;
  try {
    const response = yield call(
      fetch,
      `https://api.escuelajs.co/api/v1/products/${id}`
    );
    const data = yield apply(response, response.json);
    yield put({ type: PRODUCT_DETAILS_SUCCESS, payload: data });
  } catch (e) {
    yield put({ type: PRODUCT_DETAILS_FAILURE, payload: e });
  }
}

export function* loadProductList() {
  const response = yield call(
    fetch,
    "https://api.escuelajs.co/api/v1/products"
  );
  const data = yield apply(response, response.json);
  yield put({ type: PRODUCT_SENT_SUCCESS, payload: data });
}


export function* loadProductCategory() {
  const { id } = yield select((state) => state.category);
  const { product } = yield select((state) => state.app);
  const request = yield call(
    fetch,
    `https://api.escuelajs.co/api/v1/categories/${id}`
  );
  const data = yield apply(request, request.json);

  // eslint-disable-next-line array-callback-return
  const categoryState = product.filter((items) => {
    if (items.category.name === data.name) {
      return items;
    }
  });
  yield put({ type: PRODUCT_SENT_SUCCESS, payload: categoryState });
}

export function* filterByPrice (){
  const  {serchPrice}  = yield select((state) => state.filter);
   const request = yield call(fetch,
  `https://api.escuelajs.co/api/v1/products/?price=${serchPrice}`)
  const data = yield apply(request,request.json)
  yield put({ type: PRODUCT_SENT_SUCCESS, payload: data });
}
export function* filterByMaxMiniPrice (){
  const  {miniMaxPrice}  = yield select((state) => state.filter);
  const request = yield call(fetch,
  `https://api.escuelajs.co/api/v1/products/?price_min=${miniMaxPrice.miniPrice}&price_max=${miniMaxPrice.maxPrice}`)
  const data = yield apply(request,request.json)
  yield put({ type: PRODUCT_SENT_SUCCESS, payload: data });
}
export function* filterByTitle (){
  const  {searchTitle}  = yield select((state) => state.filter);
  const request = yield call(fetch,
  `https://api.escuelajs.co/api/v1/products/?title=${searchTitle}`)
  const data = yield apply(request,request.json)
  yield put({ type: PRODUCT_SENT_SUCCESS, payload: data });
}

 export function* routeChangeSaga() {
  while (true) {
    const action = yield take(LOCATION_CHANGE);
    const state = yield select((state) => state.app);
    if (
      matchPath(action.payload.location.pathname, getRouteConfig(MAIN_ROUTE))
    ) {
      yield put({
        type: PRODUCT_SENT,
        payload: state,
      });
    }

    const detailsPage = matchPath(
      action.payload.location.pathname,
      getRouteConfig(PRODUCTS_DETAILS_ROUTE)
    );
    if (detailsPage) {
      const { id } = detailsPage.params;
      if (id) {
        yield put({
          type: PRODUCT_DETAILS,
          payload: {
            id,
          },
        });
      }
    }
  }
 }
export default function* productSaga() {
  yield fork(routeChangeSaga);
  yield takeEvery(PRODUCT_SENT, loadProductList);
  yield takeEvery(PRODUCT_DETAILS, loadProductDetails);
  yield takeEvery(PRODUCT_CATEGORY_CLOTHES, loadProductCategory);
  yield takeEvery(FILTER_BY_PRICE,filterByPrice)
  yield takeEvery(FILTER_BY_MAX_MINI_PRICE,filterByMaxMiniPrice)
  yield takeEvery(FILTER_BY_TITLE,filterByTitle)
}

