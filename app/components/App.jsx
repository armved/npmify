import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import PkgList from './PkgList';
import Search from './Search';

const App = () => (
  <MuiThemeProvider>
    <div style={{ width: 1024, margin: '0 auto' }}>
      <h1>App</h1>
      <Search />
      <PkgList />
    </div>
  </MuiThemeProvider>
);

export default App;
