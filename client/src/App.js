import React from "react";
// import Books from "./pages/Books";
// import Detail from "./pages/Detail";
import NoMatch from "./pages/NoMatch";
import Saved from "./pages/Saved";
import Search from "./pages/Search";
import Nav from "./components/Nav";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route path="/" exact component={Search} />
          <Route path="/search" exact component={Search} />
          <Route path="/saved" exact component={Saved} />
          <Route component={NoMatch} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;