import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import Header from '../Header/MainHeader';
import SearchNullResultPage from './SearchNullResultPage';
import SearchResultPage from './SearchResultPage';
import SearchBar from '../LandingPage/SearchBar';
import QueryString from 'query-string';

export default function SearchPage() {
  // const [orglist, setOrg] = useState(null);
  const [state, setstate] = useState(true);
  const [loading, setloading] = useState(true);
  const { search } = useLocation();
  const searchword = QueryString.parse(search).keyword;

  useEffect(() => {
    async function initiateState() {
      const orgresult = await axios.get('/app/organizations', { params: { keyword: searchword } });
      if (orgresult.data.isSuccess) setstate(true);
      else setstate(false);
      setloading(false);
    }
    initiateState();
    setloading(true);
  }, [searchword]);

  return (
    <>
      <Header />
      <SearchBar name={searchword} />
      <div>
        {loading ? (
          <div style={{ textAlign: 'center', margin: '20px auto', fontSize: 13, fontWeight: 500 }}>loading..</div>
        ) : state ? (
          // (
          //   orglist.map((org, idx) => {
          //     return <h3>{org.organizationName} </h3>;
          //   })
          // )
          <SearchResultPage name={searchword} />
        ) : (
          <SearchNullResultPage name={searchword} />
        )}
      </div>
    </>
  );
}
