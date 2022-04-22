import React, { Component } from 'react';
import { Navigate, BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import LandingPage from './components/views/LandingPage/LandingPage';
import LoginLandingPage from './components/views/LoginPage/LoginLandingPage';
import RegisterLandingPage from './components/views/RegisterPage/RegisterLandingPage';
import Contributor from './components/views/Footer/Contributor';
import SearchPage from './components/views/SearchPage/SearchLandingPage';
import MyPage from './components/views/MyPage/MyPage';
import OrgMainPage from './components/views/Organization/OrgMainPage';

class App extends Component {
  render() {
    return (
      <Router basename="/app">
        <div>
          <Routes>
            <Route exact path="/" element={<LandingPage />} />
            <Route exact path="/users/login" element={<LoginLandingPage />} />
            <Route exact path="/users/register" element={<RegisterLandingPage />} />
            <Route exact path="/organizations" element={<SearchPage />} />
            <Route exact path="/organizations/:organizationId" element={<OrgMainPage />} />
            <Route exact path="/contributors" element={<Contributor />} />
            <Route exact path="/users/myPage" element={<MyPage />} />
          </Routes>
        </div>
      </Router>
    );
  }
}

export default App;
