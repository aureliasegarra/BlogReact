// Import npm
import React from 'react';
import { Route } from 'react-router-dom';

// Import Components
import Header from 'src/components/Header';
import Posts from 'src/components/Posts';
import Footer from 'src/components/Footer';

// Import data
import categoriesData from 'src/data/categories';
import postsData from 'src/data/posts';
import {getPostsByCategory} from 'src/selectors';
import './style.scss';

const Blog = () => {

  return (
    <div>
      <Header categories={categoriesData} />
      {categoriesData.map((category) => {
        
        const filteredPosts = getPostsByCategory(postsData, category.label);
        return (
          <Route
           exact
           key={category.label}
           path={category.route}
          >
           <Posts posts={filteredPosts} />
          </Route>
        )
      })}
      <Footer />
    </div>
  );
};

export default Blog;