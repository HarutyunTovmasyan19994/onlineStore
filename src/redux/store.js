import {createStore,applyMiddleware} from 'redux'
import createSagaMiddleware from "redux-saga"
import {history} from "./reducers/productReducers";
import {routerMiddleware} from "connected-react-router";
import rootReducers from "./reducers/productReducers";
import rootSaga from "./saga";


const sagaMiddleware = createSagaMiddleware()


const store = createStore(
    rootReducers,
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__(
        applyMiddleware(
            routerMiddleware(history),
            sagaMiddleware
        )
    )
)

sagaMiddleware.run(rootSaga)

export default store
