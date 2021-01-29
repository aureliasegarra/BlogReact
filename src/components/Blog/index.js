// == Import npm
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// == Import data
import './style.scss';
import postsData from 'src/data/posts';
import categoriesList from 'src/data/categories';

// == Import components
import Nav from 'src/components/Nav';
import Home from 'src/components/Home';
import Angular from 'src/components/Angular';
import Oclock from 'src/components/Oclock';

// == Composant stateful
class Blog extends React.Component {
state = {
  posts: postsData,
  categories: categoriesList,
}


 render() {
   return (
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
 }

};

// == Export
export default Blog;
