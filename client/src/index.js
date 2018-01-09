import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import Main from './components/Main';
import registerServiceWorker from './registerServiceWorker';

import { BrowserRouter } from 'react-router-dom';
import ReduxPromise from 'redux-promise';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers)}>
        <BrowserRouter>
            <Main />
        </BrowserRouter>
    </Provider>
    , document.getElementById('root'));
registerServiceWorker();
