import React from 'react';
import { Navigate, BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import LandingPage from './components/views/LandingPage/LandingPage';
import LoginLandingPage from './components/views/LoginPage/LoginLandingPage';
import RegisterLandingPage from './components/views/RegisterPage/RegisterLandingPage';

function App() {
  return (
    <Router basename="/app">
      <div>
        <Routes>
          <Route exact path="/" element={<LandingPage />} />
          <Route exact path="/users/login" element={<LoginLandingPage />} />
          <Route exact path="/users/register" element={<RegisterLandingPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
