import React, { useEffect, useState } from 'react';
import Header from '../Header/MainHeader';
import authAxios from '../../../lib/refreshToken';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Autocomplete from '@mui/material/Autocomplete';

export default function LandingPage(props) {
  const [name, setName] = useState(null);
  const [keyword, setKeyword] = useState(null);
  const onKeywordHandler = e => {
    console.log(e);
    setKeyword(e.currentTarget.value);
    console.log(keyword);
  };
  const testItem = [
    {
      cname: '단국대학교',
      place: '경기도',
    },
    {
      cname: '서울대학교',
      place: '서울',
    },
  ];
  useEffect(
    () =>
      async function () {
        const { profile } = await authAxios.get('/users/profile');
        console.log('h');
        if (profile.isSuccess) {
          setName(profile.name);
        }
      },
    [],
  );
  return (
    <>
      <Header />
      <div style={{ textAlign: 'center', fontWeight: 700, fontSize: '20px', margin: '50px 0 20px 0' }}>조직/기관명을 검색하세요</div>
      <Stack style={{ margin: '0 auto' }} spacing={2} sx={{ width: 300 }}>
        <Autocomplete
          id="free-solo-demo"
          freeSolo
          options={testItem.map(option => option.cname)}
          renderInput={params => <TextField {...params} label="freeSolo" />}
        />
      </Stack>
    </>
  );
}
