import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Provider} from "react-redux" 
import {BrowserRouter} from "react-router-dom"
import store from './redux/store';
import {Auth0Provider} from "@auth0/auth0-react"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
      <Auth0Provider issuer={process.env.REACT_APP_ISSUER} audience={process.env.REACT_APP_AUDIENCE} domain= {process.env.REACT_APP_AUTH0_DOMAIN} clientId= {process.env.REACT_APP_AUTH0_CLIENT_ID} redirectUri={window.location.origin}>
    <App />
      </Auth0Provider>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
