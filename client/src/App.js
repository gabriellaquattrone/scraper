import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// Pages
import Homepage from '../src/pages/index'
import Saved from '../src/pages/saved';

// API
import API from "./utils/API";

// Components
import Navbar from "../src/components/Navbar";

function App() {

  // Whenever I update this, it will change the page.
  // setArticles is the only way I can update articles.
  const [articles, setArticles] = useState([]);
  return (
    <Router>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Navbar setArticles={setArticles}/>
        <Switch>
          <Route exact path="/">
            <Homepage articles={articles}/>
          </Route>
          <Route exact path="/saved">
            <Saved />
          </Route>
        </Switch>
    </Router>
   
  );
}

export default App;
