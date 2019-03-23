import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import Welcome from 'src/components/Welcome';
import Home from 'src/components/Home';
import EventPage from 'src/components/Home/Events/EventPage'

const Routes = () => (
  <BrowserRouter >
  <Switch>
  <Route exact path="/" component={Welcome}/>
  <Route path="/home" component={Home}/>
  <Route path="/events/:slug" component={EventPage} />
  </Switch>
  </BrowserRouter>
);
export default Routes;
