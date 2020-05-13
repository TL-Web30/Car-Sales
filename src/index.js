import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { featureReducer } from './reducers/reducer';
import { Provider } from 'react-redux';
import { createStore } from "redux";

import 'bulma/css/bulma.css';
import './styles.scss';

const store = createStore(featureReducer);

const rootElement = document.getElementById('root');
ReactDOM.render(
<Provider store={store}>
    <App />
</Provider>, rootElement);
