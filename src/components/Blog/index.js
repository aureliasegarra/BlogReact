// == Import npm
import React from 'react';

// == Import data
import './style.scss';

// == Import components
import Home from 'src/components/Home';
import Nav from 'src/components/Nav';
import React from 'src/components/React';
import Angular from 'src/components/Anuglar';

// == Composant
const Blog = () => (
  <div className="blog">
    <Home />
    <Nav />
    <React />
    <Angular />
  </div>
);

// == Export
export default Blog;
