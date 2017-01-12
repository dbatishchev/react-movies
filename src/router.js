import React from "react";
import {Router, Route, IndexRoute} from "react-router";
import NotFound from "./components/NotFound";
import App from './pages/App';
import MoviesIndex from './pages/MoviesIndex';
import MoviesNew from './pages/MoviesNew';
import MoviesShow from './pages/MoviesShow';

export default (
    <Router>
        <Route path="/" component={App}>
            <IndexRoute component={MoviesIndex}/>
            <Route path="movies/new" component={MoviesNew}/>
            <Route path="movies/:id" component={MoviesShow}/>
            <Route path="*" component={NotFound}/>
        </Route>
    </Router>
);