import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import Home from '../views/home.js';
import Blog from '../views/blog.js';
import Contact from '../views/contact.js';
import Dashboard from '../views/dashboard.js';


class PageRouter extends Component {
  render() {
    return (
        <Router>
          <Switch>
              <Route exact={true} path="/" component={Home} />
              <Route path="/blog" component={Blog} />
              <Route path="/contact" component={Contact} />
              <Route path="/dashboard" component={Dashboard} />
          </Switch>
        </Router>
    );
  }
};

export default PageRouter;
