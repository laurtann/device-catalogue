import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from '../Home';
import Watches from '../Watches';
import IPhones from '../IPhones';
import NotFound from '../NotFound';

const App = () => (
  <Router>
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/watches">
        <Watches />
      </Route>
      <Route path="/iphones">
        <IPhones />
      </Route>
    </Switch>
  </Router>
);

export default App;
