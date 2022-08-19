import React from 'react';
import ReactDOM from 'react-dom/client';
import './global.css';
import Home from './pages/home';
import Header from './pages/Header';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Details from './pages/Details';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <>
    <Routes>
      <Route path='*'element={<Header/>}></Route>
    </Routes>
    <Routes>
      <Route path='/'element={<Home/>}></Route>
      <Route path='/details/:id' element={<Details/>}></Route>
    </Routes>
    </>
  </BrowserRouter>
);
