import React from 'react';
import { Card, CardHeader, CardText } from 'material-ui/Card';

const PackageList = () => (
  <div>
    <Card>
      <CardHeader
        title="react-dom"
        subtitle="React package for working with the DOM"
      />
      <CardText>
        15.6.1
      </CardText>
    </Card>
    <Card>
      <CardHeader
        title="react-router-dom"
        subtitle="DOM bindings for React Router"
      />
      <CardText>
        4.1.2
      </CardText>
    </Card>
    <Card>
      <CardHeader
        title="react-dom-factories"
        subtitle="
        React package for DOM factory methods."
      />
      <CardText>
        1.0.0
      </CardText>
    </Card>
  </div>
);

export default PackageList;
