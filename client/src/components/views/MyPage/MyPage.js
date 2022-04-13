import React, { useState, useEffect } from 'react';
import Header from '../Header/MainHeader';
import Footer from '../Footer/Footer';

export default function MyPage(props) {
  const [name, setName] = useState('');
  const getProfile = name => {
    setName(name);
  };
  useEffect(() => {
    async function getProfile() {}
    getProfile();
  }, []);
  return (
    <>
      <Header value={name} getProfile={getProfile} />
      <div style={{ margin: '0 auto', textAlign: 'center' }}>
        <b>{name}</b>의 MyPage
      </div>
      <Footer />
    </>
  );
}
