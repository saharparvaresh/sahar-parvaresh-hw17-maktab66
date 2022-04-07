import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from './Reducers';



// Redux Thunk Middleware
// import applyMiddleware from 'redux';
// import thunk from 'redux-thunk';
// const store = createStore(reducer, applyMiddleware(thunk));


ReactDOM.render(
  <React.StrictMode>
    <Provider store={createStore(reducer)}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);


