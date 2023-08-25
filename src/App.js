import React from 'react';
import './index.css';
import Home from "./routers/Home";
import About from "./routers/About";
import Contact from "./routers/Contact";
import Projects from "./routers/Projects";
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/projects' element={<Projects />} />
      </Routes>
    </>
  );
}

export default App;
