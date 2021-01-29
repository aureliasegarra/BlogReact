// == Import npm
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// == Import data
import './style.scss';

// == Import components
import Nav from 'src/components/Nav';
import Home from 'src/components/Home';
import Angular from 'src/components/Angular';
import Oclock from 'src/components/Oclock';

// == Composant
const Blog = () => (
  <Router>
    <div className="blog">
      <Nav />
      <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/angular" component={Angular} />
      <Route path="/oclock" component={Oclock} />
      </Switch>
    </div>
  </Router>
);

// == Export
export default Blog;
