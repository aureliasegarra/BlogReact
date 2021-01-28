// == Import npm
import React from 'react';

// == Import
import './style.scss';

// import components
import Home from 'src/components/Home';
import Angular from 'src/components/Angular';
import Oclock from 'src/components/Oclock';

// == Composant
const Nav = () => (
  <div className="nav">
    <Home />
    <Angular />
    <Oclock />
  </div>
);

// == Export
export default Nav;

