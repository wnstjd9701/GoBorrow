import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Header from '../Header/MainHeader';
import SearchNullResultPage from './SearchNullResultPage';
import SearchResultPage from './SearchResultPage';
import SearchBar from '../LandingPage/SearchBar';
import QueryString from 'query-string';
import Footer from '../Footer/Footer';
import { Container } from '@mui/material';

const SearchPage = ({ match }) => {
  const [orglist, setOrg] = useState(null);
  const [state, setState] = useState(true);
  const { keyword } = useParams();

  useEffect(() => {
    async function getKeywordOrg() {
      const orgresult = await axios.get('/app/organizations', { params: { keyword: keyword } });
      if (orgresult.data.isSuccess) {
        setOrg(orgresult.data.data);
        setState(true);
      } else {
        setOrg(null);
        setState(false);
      }
    }
    getKeywordOrg();
  }, [keyword]);

  return (
    <>
      <Header />
      <Container style={{ maxWidth: 'max-content' }} fixed>
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
      </Container>
      <Footer />
    </>
  );
};

export default SearchPage;
