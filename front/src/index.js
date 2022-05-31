import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import rootReducer from './modules';
import {composeWithDevTools} from 'redux-devtools-extension';
import ReduxThunk from 'redux-thunk'
import axios from "axios";
const store = createStore(rootReducer, composeWithDevTools(
    applyMiddleware(ReduxThunk)
));

axios.create({
    baseURL: 'http://localhost:5000',
    headers: {'Content-Type': 'multipart/form-data'},
    timeout: 1000
});

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <App/>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
