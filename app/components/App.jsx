import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import PackageListContainer from '../containers/PackageListContainer';
import SearchContainer from '../containers/SearchContainer';

const App = () => (
  <MuiThemeProvider>
    <div style={{ width: 1024, margin: '0 auto' }}>
      <h1>App</h1>
      <SearchContainer />
      <PackageListContainer />
    </div>
  </MuiThemeProvider>
);

export default App;
