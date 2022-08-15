import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/shaka-player/dist/controls.css';
import './index.css';
import App from './App';
import './responsive.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from "react-router-dom";



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <BrowserRouter >
    <App />
    </BrowserRouter>
  </React.StrictMode>
);
reportWebVitals();
