// Import npm
import React, { useState } from 'react';
import { Route, Switch } from 'react-router-dom';

// Import Components
import Header from 'src/components/Header';
import Posts from 'src/components/Posts';
import Footer from 'src/components/Footer';
import NotFound from 'src/components/NotFound';

// Import data
import categoriesData from 'src/data/categories';
import postsData from 'src/data/posts';
import {getPostsByCategory} from 'src/selectors';
import './style.scss';

const Blog = () => {

const test = useState();
console.log(test);

  return (
    <div>
      <Header categories={categoriesData} />
      <Switch>
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
        <Route><NotFound /></Route> // !No path specified = go on all the route
      </Switch>
      <Footer />
    </div>
  );
};

export default Blog;