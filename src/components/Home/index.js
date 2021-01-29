// == Import npm
import React from 'react';
import PropTypes from 'prop-types';

// == Import
import './style.scss';
import Article from './Article';

// == Composant
const Home = ({ posts }) => (
  <div className="container">
    <h1 className="container__title">DEV OF THRONES</h1>
    <wrapper className="wrap">
      {posts.map((post) => (
        <Article
         key={post.id}
         {...post}
        />
      ))}
    </wrapper>
  </div>
);

Home.propTypes = {
  posts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }),
  ).isRequired,
}
// == Export
export default Home;