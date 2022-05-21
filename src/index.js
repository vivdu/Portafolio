import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Studies from './pages/Studies';
import Jobs from './pages/Jobs';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Error4 from './pages/404';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <BrowserRouter>
  <Routes>
    <Route path='/' element={<Home />}></Route>
    <Route path='/home' element={<Navigate replace to={"/"} />}></Route>
    <Route path='/jobs' element={<Jobs />}></Route>
    <Route path='/studies' element={<Studies />}></Route>
    <Route path='/projects' element={<Projects />}></Route>
    <Route path='/contact' element={<Contact />}></Route>
    <Route path='*' element={<Error4/>}></Route>
  </Routes>
 </BrowserRouter>
);


