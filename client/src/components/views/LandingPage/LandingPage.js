import React, { useEffect } from 'react';
import Header from '../Header/MainHeader';
import SearchBar from './SearchBar';
import DashBoard from './DashBoard';
import Footer from '../Footer/Footer';
import { Container } from '@mui/material';

export default function LandingPage(props) {
  return (
    <>
      <Header />
      <Container>
        <SearchBar />
        <DashBoard />
      </Container>
      <Footer />
    </>
  );
}
