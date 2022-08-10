import App from './App';

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
