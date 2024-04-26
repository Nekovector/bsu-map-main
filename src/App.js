import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import NavBar from './components/common/navbar';
import Footer from './components/common/footer';
import Map from './pages/map';
import ScientistsMap from './pages/scientists-map';
import About from './pages/about';
import InDevelopment from './pages/in-development';
import CreateScientistForm from './components/scientists-part/create-scientist-form';


function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" Component={Map} />
        <Route path="/scientists" Component={ScientistsMap} />
        <Route path="/about" Component={About} />
        <Route path="/in-development" Component={InDevelopment} />
        <Route path="/create-scientist" Component={CreateScientistForm} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
