import React from 'react';
import SearchBar from '../LandingPage/SearchBar';

export default function SearchNullResultPage(props) {
  const div_Style = {
    textAlign: 'center',
    fontSize: 14,
    margin: '20px auto 20px auto',
    fontWeight: 'bold',
    width: 350,
  };
  const red_Style = {
    color: 'red',
  };
  const keyword = props.name;
  return (
    <>
      <SearchBar />
      <div style={div_Style}>
        <div style={{ margin: 5 }}>
          <span style={{ color: 'blue' }}>검색어</span>: {keyword}
        </div>
        검색어와 일치하는 조직/기관이 <span style={red_Style}>없습니다.</span>
      </div>
    </>
  );
}
