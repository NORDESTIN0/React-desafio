import React from 'react';
import ReactDOM from 'react-dom/client';
import './global.css';
import Home from './pages/home';
import Header from './header';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Details from './pages/Details';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <Header></Header>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/details/:id' element={<Details/>}></Route>
      <Route path='*' element={<Home/>}></Route>
    </Routes>
  </BrowserRouter>
);
