//import thư viện react
import React from 'react';
//import thư viện react-dom
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';

//render component App vào Dom
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
