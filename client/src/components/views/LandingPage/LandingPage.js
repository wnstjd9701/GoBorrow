import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../Header/MainHeader';
import authAxios from '../../../lib/refreshToken';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Autocomplete from '@mui/material/Autocomplete';
import { useDispatch } from 'react-redux';
import { searchKeyword } from '../../../_actions/user_action';
import SearchIcon from '@mui/icons-material/Search';

export default function LandingPage(props) {
  const dispatch = useDispatch();
  let navigate = useNavigate();
  const [name, setName] = useState(null);
  const [keyword, setKeyword] = useState(null);
  const onKeywordHandler = e => {
    setKeyword(e.currentTarget.value);
  };
  const onSearchHandler = e => {
    console.log(keyword);
    e.preventDefault();
    const body = {
      keyword: keyword,
    };
    if (keyword) {
      dispatch(searchKeyword(body)).then(response => {
        if (response.payload.message.isSuccess) {
          navigate('/organization');
        }
      });
    }
  };
  const testItem = [
    {
      cname: '단국대학교 죽전캠퍼스',
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
      <form onSubmit={onSearchHandler}>
        <Stack style={{ flexDirection: 'row', margin: '0 auto' }} spacing={2} sx={{ width: 330 }}>
          <Autocomplete
            style={{ width: 'inherit' }}
            id="free-solo-demo"
            freeSolo
            options={testItem.map(option => option.cname)}
            onChange={(e, newValue) => {
              setKeyword(newValue);
            }}
            renderInput={params => <TextField {...params} onChange={onKeywordHandler} label="Search.." />}
          />
          <button style={{ margin: '0 auto' }}>
            <SearchIcon style={{ display: 'inline-block' }} />
          </button>
        </Stack>
      </form>
    </>
  );
}
