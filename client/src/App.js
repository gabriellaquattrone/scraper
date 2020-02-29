import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// Pages
import Homepage from '../src/pages/index'
import Saved from '../src/pages/saved';

// Components
import Navbar from "../src/components/Navbar";
function App() {
  return (
    <Router>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Navbar/>
        <Switch>
          <Route exact path="/">
            <Homepage />
          </Route>
          <Route exact path="/saved">
            <Saved />
          </Route>
        </Switch>
    </Router>
   
  );
}

export default App;
