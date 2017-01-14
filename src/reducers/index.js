import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";
import moviesReducer from "./movies";

export const reducers = combineReducers({
    routing: routerReducer,
    movies: moviesReducer
});