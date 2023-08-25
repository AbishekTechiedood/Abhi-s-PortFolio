import './App.css';
import React from 'react';
import {Routes , Route} from 'react-router-dom'
import Home from './Routes/Home';
import Project from './Routes/Project';
import Contact from './Routes/Contact';
import About from './Routes/About';

function App() {

  return (

    <>


    <Routes>

      <Route path='/' element ={<Home />}></Route>
      <Route path='/project' element = {<Project />}></Route>
      <Route path='/about' element = {<About />}></Route>
      <Route path='/contact' element = {<Contact />}></Route>

  </Routes>
    
    </>
  );
}

export default App;
