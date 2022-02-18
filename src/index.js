import React from 'react';
import ReactDOM from 'react-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './index.css'
import '../src/Styles/styles.scss'
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'
import reducer from './redux/reducers/reducer'
import fetchShops from './redux/actions/FetchData';
/**
 * store => collection that takes reducer
 * dispatch(actions()) => actions that sets type that reducer uses
 * provider => allows the store to be used in app
 * thunk => library allowing for async call in middleware
 */
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)));
store.dispatch(fetchShops())
ReactDOM.render(

  <BrowserRouter>
    <Routes>
      <Route path='/*' element={<Provider store={store}><App /></Provider>} ></Route>
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
