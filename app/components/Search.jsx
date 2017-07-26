import React from 'react';
import { func } from 'prop-types';
import TextField from 'material-ui/TextField';

const Search = (props) => {
  let query;
  return (
    <div>
      <TextField
        ref={(node) => { query = node; }}
        onChange={() => props.onGetPackages(query.input.value)}
        hintText="Search"
      />
    </div>
  );
};

Search.propTypes = {
  onGetPackages: func.isRequired,
};

export default Search;
