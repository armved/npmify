import React from 'react';
import AppBar from 'material-ui/AppBar';
import FontIcon from 'material-ui/FontIcon';

const iconStyles = {
  marginRight: 25,
  marginTop: 7,
  fontSize: 30,
  color: 'white',
};

const Menu = () => (
  <AppBar
    title="Npmify"
    iconElementRight={
      <a href="">
        <FontIcon href="https://github.com/AvoJFB" className="fa fa-github" style={iconStyles} />
      </a>
    }
  />
);

export default Menu;
