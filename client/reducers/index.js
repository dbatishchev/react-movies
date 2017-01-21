import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";
import moviesReducer from "./movies";
import userReducer from "./user";

export const reducers = combineReducers({
    routing: routerReducer,
    movies: moviesReducer,
    user: userReducer,
});