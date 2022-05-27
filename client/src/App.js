import React, { Component } from 'react';
import { Navigate, BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import LandingPage from './components/views/User/MainPage/MainLandingPage';
import LoginLandingPage from './components/views/User/LoginPage/LoginLandingPage';
import RegisterLandingPage from './components/views/User/RegisterPage/RegisterLandingPage';
import Contributor from './components/views/Public/Footer/Contributor';
import SearchPage from './components/views/User/SearchPage/SearchLandingPage';
import MyPage from './components/views/User/MyPage/MyPage';
import OrgMainPage from './components/views/User/OrganizationPage/OrgMainPage';
import ProductPage from './components/views/User/ProductPage/ProductMainPage';
import MyFavoriteInstitution from './components/views/User/MyPage/Favorite';

import OrganizationMainPage from './components/views/Organization/MainPage/MainLandingPage';
import OrganizationPostProudctItemPage from './components/views/Organization/PostPage/PostItemPage/PostItemPage';
import OrganizationPostProudctPage from './components/views/Organization/PostPage/PostProductPage/PostProductPage';
import OrganizationRentalProcessingPage from './components/views/Organization/RentalStatusPage/ProcessingPage';

class App extends Component {
  render() {
    return (
      <Router basename="/app">
        <div>
          <Routes>
            {/* User Page */}
            <Route exact path="/" element={<LandingPage />} />
            <Route exact path="/users/login" element={<LoginLandingPage />} />
            <Route exact path="/users/register" element={<RegisterLandingPage />} />
            <Route exact path="/organizations" element={<SearchPage />} />
            <Route exact path="/organizations/:organizationId" element={<OrgMainPage />} />
            <Route exact path="/organizations/:organizationId/:productId" element={<ProductPage />} />
            <Route exact path="/contributors" element={<Contributor />} />
            <Route exact path="/users/myPage" element={<MyPage />} />
            <Route exact path="/users/myPage/favorite" element={<MyFavoriteInstitution />} />

            {/* Organization Page */}
            <Route exact path="/org" element={<OrganizationMainPage />} />
            <Route exact path="/org/rental/processing" element={<OrganizationRentalProcessingPage />} />
            <Route exact path="/org/post/product" element={<OrganizationPostProudctPage />} />
            <Route exact path="/org/post/product/item" element={<OrganizationPostProudctItemPage />} />
          </Routes>
        </div>
      </Router>
    );
  }
}

export default App;
