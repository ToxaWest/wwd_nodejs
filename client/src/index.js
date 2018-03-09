import React from 'react';
import ReactDOM from 'react-dom';
import App from './blocks/App';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import allReducers from "./reducers/index";

import registerServiceWorker from './registerServiceWorker';

const store = createStore(allReducers);


ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    , document.getElementById('root'));
registerServiceWorker();
