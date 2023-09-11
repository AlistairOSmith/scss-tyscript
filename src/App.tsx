import React from 'react';
import { Button } from 'antd';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import First from './components/first';
import Second from './components/second';
import Third from './components/third';
import Fourth from './components/fourth';
import Fifth from './components/fifth';
import Sixth from './components/sixth';
import './App.css';
import './components/style.scss'



function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<First />} />
          <Route path='/second' element={<Second />} />
          <Route path='/third' element={<Third />} />
          <Route path='/fourth' element={<Fourth />} />
          <Route path='/fifth' element={<Fifth />} />
          <Route path='/sixth' element={<Sixth />} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
