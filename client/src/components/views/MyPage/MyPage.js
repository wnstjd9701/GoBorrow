import React, { useState, useEffect } from 'react';
import Header from '../Header/MainHeader';
import Footer from '../Footer/Footer';
import authAxios from '../../../lib/refreshToken';

export default function MyPage() {
  const [name, setName] = useState('');
  useEffect(() => {
    async function getProfile() {
      const profile = await authAxios.get('/app/users/profile');

      if (profile.data.isSuccess) {
        setName(profile.data.data.userName);
      }
    }
    getProfile();
  }, []);
  return (
    <>
      <Header />
      <div style={{ margin: '0 auto', textAlign: 'center' }}>
        <b>{name}</b>의 MyPage
      </div>
      <Footer />
    </>
  );
}
