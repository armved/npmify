import React from 'react';

const PackagePage = ({ match }) => (
  <div className="container">{match.params.package} Page</div>
);

export default PackagePage;
