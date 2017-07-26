import React from 'react';
import CircularProgress from 'material-ui/CircularProgress';
import PackageCard from './PackageCard';

const PackageList = (props) => {
  let content;
  if (props.isFetching) {
    content = <CircularProgress />;
  } else if (props.packages.length > 0) {
    content = (
      <div>
        {props.packages.map(pkg => (
          <PackageCard
            title={pkg.package.name}
            subtitle={pkg.package.description}
            version={pkg.package.version}
          />
        ))}
      </div>
    );
  } else {
    content = <h1>No Packages</h1>;
  }
  return content;
};


export default PackageList;
