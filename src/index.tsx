import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import "bootstrap/dist/css/bootstrap.min.css"
import "./css/Footer.css"
import "./css/Home.css"
import "./css/Header.css"
import "./css/Todo.css"
import {BrowserRouter} from "react-router-dom";


const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
   // <React.StrictMode>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    //</React.StrictMode>
);

