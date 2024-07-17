import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import NewVideo from './pages/NewVideo';
import { VideoProvider } from './context/VideoContext';
import Header from './components/COMPONENTEHEADER';
import Footer from './components/COMPONENTEFOOTER';

const App = () => {
  return (
    <VideoProvider>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/NewVideo" element={<NewVideo />} />
        </Routes>
        <Footer />
      </Router>
    </VideoProvider>
  );
};

export default App;