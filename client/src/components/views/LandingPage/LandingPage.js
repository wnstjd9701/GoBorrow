import React, { useEffect } from 'react';
import Header from '../Header/MainHeader';
import SearchBar from './SearchBar';
import DashBoard from './DashBoard';
import Footer from '../Footer/Footer';

export default function LandingPage(props) {
  return (
    <>
      <Header />
      <SearchBar />
      <DashBoard />
      <Footer />
    </>
  );
}
