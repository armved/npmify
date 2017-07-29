import React from 'react';
import ReactDOM from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import configureStore from './store/configureStore';
import Root from './components/Root';

injectTapEventPlugin();
const store = configureStore();

ReactDOM.render(
  <Root store={store} />,
  document.getElementById('root'),
);

