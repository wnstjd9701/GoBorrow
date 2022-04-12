import React from 'react';
import { useParams } from 'react-router-dom';

const SearchPage = ({ match }) => {
  const { keyword } = useParams();
  console.log(keyword);
  return (
    <div>
      <h2>{keyword}</h2>
    </div>
  );
};

export default SearchPage;
