// == Import npm
import React from 'react';
import { Link } from 'react-router-dom';

// == Import
import './style.scss';

// import components
import Home from 'src/components/Home';
import Angular from 'src/components/Angular';
import Oclock from 'src/components/Oclock';

// == Composant
const Nav = () => (
  <nav className="nav">
    <ul className="nav__links">

      <Link to="/">
        <li>Home</li>
      </Link>
      <Link to="/angular">
        <li>Angular</li>
      </Link>
      <Link to="/oclock">
        <li>Oclock</li>
      </Link>
    </ul>
  </nav>
);

// == Export
export default Nav;

