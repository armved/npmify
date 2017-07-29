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
        {props.packages.map(objects => (
          <PackageCard
            key={objects.package.name}
            title={objects.package.name}
            subtitle={objects.package.description}
            version={objects.package.version}
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
