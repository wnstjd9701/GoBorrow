import React, { useEffect, useState } from 'react';
import Stack from '@mui/material/Stack';
import { useNavigate, Link } from 'react-router-dom';
import Autocomplete from '@mui/material/Autocomplete';
import { useDispatch } from 'react-redux';
import { searchKeyword } from '../../../../_actions/user_action';
import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';

export default function SearchBar(props) {
  useEffect(() => {}, [props]);
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
      <div style={{ textAlign: 'center', fontWeight: 700, fontSize: 20, margin: '50px 0 20px 0' }}>
        <span style={{ color: 'green' }}>조직/기관명</span>을 검색하세요
      </div>
      <form style={{ marginBottom: '20px' }}>
        <div>
          <Stack style={{ position: 'relative', flexDirection: 'row', margin: '0 auto' }} spacing={2} sx={{ width: 330 }}>
            <Autocomplete
              disableClearable
              style={{ width: 'inherit' }}
              id="free-solo-demo"
              freeSolo
              options={testItem.map(option => option.cname)}
              onChange={(e, newValue) => {
                setKeyword(newValue);
              }}
              renderInput={params => <TextField {...params} onChange={onKeywordHandler} label={searchword} />}
            />
            <Link style={{ position: 'absolute', right: 0, zIndex: 4 }} to={'/organizations?keyword=' + keyword}>
              <button style={{ margin: '0 auto' }}>
                <SearchIcon style={{ display: 'inline-block' }} />
              </button>
            </Link>
          </Stack>
        </div>
      </form>
    </>
  );
}
