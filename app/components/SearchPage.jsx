import React from 'react';
import PackageListContainer from '../containers/PackageListContainer';
import SearchContainer from '../containers/SearchContainer';

const SeachPage = () => (
  <div className="container">
    <SearchContainer />
    <PackageListContainer />
  </div>
);

export default SeachPage;
