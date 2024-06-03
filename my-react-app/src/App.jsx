// src/App.jsx
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Dashboard from './components/Dashboard';
import About from './components/About';
import Signin from './components/Signin';
import Signup from './components/Signup';
import Projects from './components/Projects';
import Header from './components/Header';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/about' element={<About />}/>
            <Route path='/sign-in' element={<Signin />}/>
            <Route path='/sign-up' element={<Signup/>}/>
            <Route path='/dashboard' element={<Dashboard />}/>
            <Route path='/projects' element={<Projects/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
