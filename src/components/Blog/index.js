// == Import npm
import React from 'react';

// == Import data
import './style.scss';

// == Import components
import Nav from 'src/components/Nav';
import Home from 'src/components/Home';
import Angular from 'src/components/Angular';
import Oclock from 'src/components/Oclock';

// == Composant
const Blog = () => (
  <div className="blog">
    <Nav />
    <Home />
    <Angular />
    <Oclock />
  </div>
);

// == Export
export default Blog;
