import React from "react";
import {Router, Route, IndexRoute, browserHistory} from "react-router";
import NotFound from "./components/NotFound";
import App from './pages/App';
import MoviesIndex from './pages/MoviesIndex';
import MoviesNew from './pages/MoviesNew';
import MoviesShow from './pages/MoviesShow';
import SignIn from './pages/SignIn';
import Profile from './pages/Profile';

export default (
    <Router history={browserHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={MoviesIndex}/>
            <Route path="movies/new" component={MoviesNew}/>
            <Route path="movies/:id" component={MoviesShow}/>
            <Route path="/signin" component={SignIn} />
            <Route path="/profile" component={Profile} />
            <Route path="*" component={NotFound}/>
        </Route>
    </Router>
);