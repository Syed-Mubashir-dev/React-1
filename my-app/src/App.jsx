import React from 'react'
import { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Component/Landingpage/Home';
import Login from './Component/Login/Login';
import AOS from "aos";
import "aos/dist/aos.css";



export default function App() {
  
  useEffect(() => {
    AOS.init({
      duration: 1000,
      // once: true
    });
  }, []);
  return (
    
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />  
        </Routes>
      </Router>
      
    </div>
  )
}
