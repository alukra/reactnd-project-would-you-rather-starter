import React from 'react';
import { render } from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import configureStore from './configureStore';

const store = configureStore()

console.log(store.getState())

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
)
