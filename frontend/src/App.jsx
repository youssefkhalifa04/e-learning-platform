import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { NextUIProvider } from "@nextui-org/react";

import Landing from './pages/Landing';
import OffersPage from './pages/Offers'; // si tu as cette page
import Courses from './pages/Courses';
import About from './pages/About';
import Login from './pages/Login';
import Signup from './pages/Signup';

import Details from './pages/Details';
function App() {
  return (
    <NextUIProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/offers" element={<OffersPage />} />
          <Route path="/Cours" element={<Courses />} />
          <Route path="/àpropos" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/details" element={<Details />} />
          
        </Routes>
      </Router>
    </NextUIProvider>
  );
}

export default App;
