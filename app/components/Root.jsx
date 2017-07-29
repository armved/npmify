import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Menu from './Menu';
import Content from './Content';

const Root = ({ store }) => (
  <Provider store={store}>
    <MuiThemeProvider>
      <BrowserRouter>
        <div>
          <Menu />
          <Content />
        </div>
      </BrowserRouter>
    </MuiThemeProvider>
  </Provider>
);

export default Root;
