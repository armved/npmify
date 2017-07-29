import React from 'react';
import { Switch, Route } from 'react-router-dom';
import SearchPage from './SearchPage';
import PackagePage from './PackagePage';

const Content = () => (
  <Switch>
    <Route exact path="/" component={SearchPage} />
    <Route path="/:package" component={PackagePage} />
  </Switch>
);

export default Content;
