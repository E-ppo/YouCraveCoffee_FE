import App from './App';
import reportWebVitals from './reportWebVitals';

import React from 'react';
import store from './redux/configStore';
import ReactDOM from 'react-dom/client';
import axios from "axios";

import { CookiesProvider} from 'react-cookie'
import { BrowserRouter} from "react-router-dom";
import { Provider } from "react-redux";


axios.defaults.baseURL = "http://api.amorossoprc.shop:8081";
axios.defaults.withCredentials = true;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
   <CookiesProvider> 
      <Provider store={store}>
            <BrowserRouter>
               <App />
            </BrowserRouter>
      </Provider>
   </CookiesProvider> 
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
