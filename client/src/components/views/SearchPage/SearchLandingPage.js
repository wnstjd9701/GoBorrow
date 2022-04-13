import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Header from '../Header/MainHeader';
import SearchNullResultPage from './SearchNullResultPage';
import SearchResultPage from './SearchResultPage';

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
      <div>
        {state === true ? (
          // (
          //   orglist.map((org, idx) => {
          //     return <h3>{org.organizationName} </h3>;
          //   })
          // )
          <SearchResultPage name={keyword} />
        ) : (
          <SearchNullResultPage name={keyword} />
        )}
      </div>
    </>
  );
};

export default SearchPage;
