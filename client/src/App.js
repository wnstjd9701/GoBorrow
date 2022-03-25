import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import LandingPage from './components/views/LandingPage/LandingPage';
import LoginLandingPage from './components/views/LoginPage/LoginLandingPage';
import RegisterPage from './components/views/LoginPage/RegisterPage';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route exact path="/" element={<LandingPage />} />
          <Route exact path="/users/login" element={<LoginLandingPage />} />
          <Route exact path="/users/register" element={<RegisterPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
