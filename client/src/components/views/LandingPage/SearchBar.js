import React, { useEffect, useState } from 'react';
import Stack from '@mui/material/Stack';
import { useNavigate, Link, Navigate } from 'react-router-dom';
import Autocomplete from '@mui/material/Autocomplete';
import { useDispatch } from 'react-redux';
import { searchKeyword } from '../../../_actions/user_action';
import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';

export default function SearchBar(props) {
  const [keyword, setKeyword] = useState(null);
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
  const onKeywordHandler = e => {
    setKeyword(e.currentTarget.value);
  };
  const searchword = props.name ? props.name : 'Search..';

  return (
    <>
      <div style={{ textAlign: 'center', fontWeight: 700, fontSize: 20, margin: '50px 0 20px 0' }}>조직/기관명을 검색하세요</div>
      <form>
        <Stack style={{ flexDirection: 'row', margin: '0 auto' }} spacing={2} sx={{ width: 330 }}>
          <Autocomplete
            style={{ width: 'inherit' }}
            id="free-solo-demo"
            freeSolo
            options={testItem.map(option => option.cname)}
            onChange={(e, newValue) => {
              setKeyword(newValue);
            }}
            renderInput={params => <TextField {...params} onChange={onKeywordHandler} label={searchword} />}
          />
          <Link to={'/organizations?keyword=' + keyword}>
            <button style={{ margin: '0 auto' }}>
              <SearchIcon style={{ display: 'inline-block' }} />
            </button>
          </Link>
        </Stack>
      </form>
    </>
  );
}
