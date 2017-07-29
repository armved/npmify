import React from 'react';
import { func } from 'prop-types';
import TextField from 'material-ui/TextField';
import throttle from 'lodash/throttle';

const Search = (props) => {
  let query;
  return (
    <div>
      <TextField
        ref={(node) => { query = node; }}
        onChange={throttle(() => props.onGetPackages(query.input.value), 800)}
        hintText="Search"
      />
    </div>
  );
};

Search.propTypes = {
  onGetPackages: func.isRequired,
};

export default Search;
