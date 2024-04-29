import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';

import NavBar from './components/common/navbar';
import Footer from './components/common/footer';
import Map from './pages/map';
import ScientistsMap from './pages/scientists-map';
import About from './pages/about';
import InDevelopment from './pages/in-development';
import CreateScientistForm from './components/editor-part/create-scientist-form';
import Editor from './pages/editor';
import EditorNavbar from './components/editor-part/editor-navbar';


function App() {
  const { pathname } = useLocation();

  return (
    <>
      {!pathname.startsWith('/editor') && <NavBar />}
      {pathname.startsWith('/editor') && <EditorNavbar />}
      <Routes>
        <Route path="/" Component={Map} />
        <Route path="/scientists" Component={ScientistsMap} />
        <Route path="/about" Component={About} />
        <Route path="/in-development" Component={InDevelopment} />
        <Route path="/editor" Component={Editor} />
        <Route path="/editor/create-scientist" Component={CreateScientistForm} />
      </Routes>
      {!pathname.startsWith('/editor') && <Footer />}
    </>
  );
}

export default App;
