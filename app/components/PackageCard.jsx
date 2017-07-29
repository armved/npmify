import React from 'react';
import { Card, CardText, CardTitle } from 'material-ui/Card';
import { Link } from 'react-router-dom';


const PackageCard = props => (
  <div>
    <Card>
      <CardTitle
        title={<Link className="link" to={props.title}>{props.title}</Link>}
        subtitle={props.subtitle}
      />
      <CardText>{props.version}</CardText>
    </Card>
  </div>
);

export default PackageCard;
