import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { BrowserRouter, Route, Routes, } from 'react-router-dom';
import Login from './componants/Login/Login';
import SignUp from './componants/SignUp/SignUp';
import store from './Store';
import { Provider } from 'react-redux';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <>
        <BrowserRouter>
            <Provider store={store}>
                <Routes>
                    <Route path='*' element={<App />}></Route>
                    <Route path='/' element={<Login />}></Route>
                    <Route path='/signup' element={<SignUp />}></Route>
                </Routes>
            </Provider>
        </BrowserRouter>
    </>
);

