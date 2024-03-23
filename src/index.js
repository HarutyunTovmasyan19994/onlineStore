import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from "react-redux";
import {history} from "./redux/reducers/productReducers";
import {ConnectedRouter} from "connected-react-router";
import store from "./redux/store";
import Routes from "./router";
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
           <Routes/>
        </ConnectedRouter>
    </Provider>
);
