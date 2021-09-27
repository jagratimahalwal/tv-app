import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";

const HomePage = lazy(() => import("./components/HomePage"));
const Header = lazy(() => import("./components/Header"));
const ShowDetails = lazy(() => import("./components/ShowDetails"));
const SearchResults = lazy(() => import("./components/SearchResults"));
const PageNotFound = lazy(() => import("./components/PageNotFound"));
const EpisodesList = lazy(() => import("./components/Episodes"));

function App() {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <div className="mb-40">
          <Header />
          <Switch>
            <Route exact path="/tv-app" component={HomePage}></Route>
            <Route exact path="/" component={HomePage}></Route>
            <Route exact path="/show/:showId" component={ShowDetails}></Route>
            <Route exact path="/serach/:name" component={SearchResults}></Route>
            <Route
              exact
              path="/season/:seasonId"
              component={EpisodesList}
            ></Route>
            <Route path="*" component={PageNotFound}></Route>
          </Switch>
        </div>
      </Suspense>
    </Router>
  );
}

export default App;
