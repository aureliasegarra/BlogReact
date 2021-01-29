// == Import npm
import React from 'react';
import PropTypes from 'prop-types';

// == Import
import './style.scss';

// == Composant
const Article = ({ id, title, excerpt, category }) => (
  <article className="article">
    <h2 className="article__title">{post.title}</h2>
    <span className="article__category">categorie</span>
    <p className="article__content">{post.excerpt}</p>
  </article> 
);

Article.propTypes = {
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    excerpt: PropTypes.string.isRequired,
}

// == Export
export default Article;
