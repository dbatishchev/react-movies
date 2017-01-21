import React from "react";
import {Router, Route, IndexRoute, browserHistory} from "react-router";
import NotFound from "./components/NotFound";
import App from './pages/App';
import MoviesIndex from './pages/MoviesIndex';
import MoviesNew from './pages/MoviesNew';
import MoviesShow from './pages/MoviesShow';
import SignIn from './pages/SignIn';
import Profile from './pages/Profile';
import {store} from "./store.js";
import parseQueryString from "./utils/query-string-parser";
import {meFromToken, meFromTokenSuccess, meFromTokenFailure} from './actions/users';

function onAppInit(dispatch) {
    return (nextState, replace, callback) => {
        let token = localStorage.getItem('token');

        if (!token) {
            token = parseQueryString(document.location.search).accessToken;
        }

        if (!token) {
            return;
        }

        dispatch(meFromToken(token))
            .payload
            .then((response) => {
                if (!response.error) {
                    localStorage.setItem('token', token);
                    dispatch(meFromTokenSuccess(response.payload));
                } else {
                    localStorage.removeItem('token');
                    dispatch(meFromTokenFailure(response.payload));
                }
                callback();
            });
    };
}

export default (
    <Router history={browserHistory}>
        <Route path="/" component={App} onEnter={onAppInit(store.dispatch)}>
            <IndexRoute component={MoviesIndex}/>
            <Route path="movies/new" component={MoviesNew}/>
            <Route path="movies/:id" component={MoviesShow}/>
            <Route path="/signin" component={SignIn}/>
            <Route path="/profile" component={Profile}/>
            <Route path="*" component={NotFound}/>
        </Route>
    </Router>
);