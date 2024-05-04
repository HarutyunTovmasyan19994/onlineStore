import {createStore,applyMiddleware} from 'redux'
import createSagaMiddleware from "redux-saga"
import {history} from "./reducers/productReducers";
import {routerMiddleware} from "connected-react-router";
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' //
import rootReducers from "./reducers/productReducers";
import rootSaga from "./saga";


const sagaMiddleware = createSagaMiddleware()

const persistConfig = {
    key: 'root',
    storage,
}
const persistedReducer = persistReducer(persistConfig, rootReducers)
const store = createStore(
    persistedReducer,
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__(
        applyMiddleware(
            routerMiddleware(history),
            sagaMiddleware
        )
    )
)

sagaMiddleware.run(rootSaga)
 export const Storage =  persistStore(store)
export default store

