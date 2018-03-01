import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import './sass/style.scss';
import rootReducer from './reducers/rootReducer';

const createStoreWithMiddleware = applyMiddleware()(createStore);

// create store and enable redux chrome extension
const store = createStoreWithMiddleware(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

import Layout from './components/Layout/Layout';

ReactDOM.render(
    <Provider store={ store }>
        <Layout />
    </Provider>, document.querySelector('#app'));