import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import store from './redux/configStore';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import i18n from './i18';
import { DOMAIN } from './utils/settings/config';
import './sass/main.scss';
// const signalR = require("@microsoft/signalr");

// // // import { HubConnection, HubConnectionBuilder } from "@microsoft/signalr";
// export const connection = new signalR.HubConnectionBuilder().withUrl(`${DOMAIN}/DatVeHub`).configureLogging(signalR.LogLevel.Information).build();

// if (connection) {
//   connection.start() 
//     .then(() => {


//     }).catch(error => {
//       console.log(error);
//     })
// }
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
reportWebVitals();


