import React from 'react';
import PropTypes from 'prop-types';
import { Card, CardHeader, CardText } from 'material-ui/Card';

const PackageCard = props => (
  <div>
    <Card>
      <CardHeader
        title={props.title}
        subtitle={props.subtitle}
      />
      <CardText>{props.version}</CardText>
    </Card>
  </div>
);

PackageCard.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  version: PropTypes.string.isRequired,
};

export default PackageCard;
