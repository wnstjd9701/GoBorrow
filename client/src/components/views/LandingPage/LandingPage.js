import React, { useEffect, useState } from 'react';
import Header from '../Header/MainHeader';
import SearchBar from './SearchBar';
import DashBoard from './DashBoard';
import Footer from '../Footer/Footer';
import { Container } from '@mui/material';
import authAxios from '../../../lib/refreshToken';

export default function LandingPage() {
  // const [name, setName] = useState('');
  // const [dashBoard, setDashBoard] = useState('');
  // useEffect(() => {
  //   async function getProfile() {
  //     const profile = await authAxios.get('/app/users/profile');
  //     if (profile.data.isSuccess) {
  //       setName(profile.data.data.userName);
  //       setDashBoard(profile.data.data)
  //     }
  //   }
  //   getProfile();
  // }, []);
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
