import React from 'react';
import ReactDOM from 'react-dom/client';
import {Provider} from "react-redux";
import {history} from "./redux/reducers/productReducers";
import {ConnectedRouter} from "connected-react-router";
import {PersistGate} from 'redux-persist/integration/react'
import store,{Storage} from "./redux/store";
import Routess from "./router";
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <PersistGate loading={false } persistor={Storage}>
        <ConnectedRouter history={history}>
           <Routess/>
        </ConnectedRouter>
        </PersistGate>
    </Provider>
);
