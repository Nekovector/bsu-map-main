import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavBar from './components/common/navbar';
import Footer from './components/common/footer';
import Map from './pages/map';
import About from './pages/about'
import InDevelopment from './pages/in-development'

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" Component={Map} />
        <Route path="/scientists" Component={Map} />
        <Route path="/about" Component={About} />
        <Route path="/in-development" Component={InDevelopment} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
