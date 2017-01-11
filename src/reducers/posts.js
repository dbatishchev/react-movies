import {
	FETCH_MOVIES, FETCH_MOVIES_SUCCESS, FETCH_MOVIES_FAILURE, RESET_MOVIES,
	FETCH_MOVIE, FETCH_MOVIE_SUCCESS,  FETCH_MOVIE_FAILURE, RESET_ACTIVE_MOVIE,
	CREATE_MOVIE, CREATE_MOVIE_SUCCESS, CREATE_MOVIE_FAILURE, RESET_NEW_MOVIE,
	DELETE_MOVIE, DELETE_MOVIE_SUCCESS, DELETE_MOVIE_FAILURE, RESET_DELETED_MOVIE,
  VALIDATE_MOVIE_FIELDS,VALIDATE_MOVIE_FIELDS_SUCCESS, VALIDATE_MOVIE_FIELDS_FAILURE, RESET_MOVIE_FIELDS
} from '../actions/movies';

const INITIAL_STATE = { 
    moviesList: {movies: [], error:null, loading: false},  
	newMovie:{movie:null, error: null, loading: false}, 
	activeMovie:{movie:null, error:null, loading: false}, 
	deletedMovie: {movie: null, error:null, loading: false},
};

export default function(state = INITIAL_STATE, action) {
  let error;
  switch(action.type) {

  case FETCH_MOVIES:
  	return { ...state, moviesList: {movies:[], error: null, loading: true} }; 
  case FETCH_MOVIES_SUCCESS:
    return { ...state, moviesList: {movies: action.payload, error:null, loading: false} };
  case FETCH_MOVIES_FAILURE:
    error = action.payload || {message: action.payload.message};
    return { ...state, moviesList: {movies: [], error: error, loading: false} };

  case FETCH_MOVIE:
    return { ...state, activeMovie:{...state.activeMovie, loading: true}};
  case FETCH_MOVIE_SUCCESS:
    return { ...state, activeMovie: {movie: action.payload, error:null, loading: false}};
  case FETCH_MOVIE_FAILURE:
    error = action.payload || {message: action.payload.message};
    return { ...state, activeMovie: {movie: null, error:error, loading:false}};

  case CREATE_MOVIE:
  	return {...state, newMovie: {...state.newMovie, loading: true}}
  case CREATE_MOVIE_SUCCESS:
  	return {...state, newMovie: {movie:action.payload, error:null, loading: false}}
  case CREATE_MOVIE_FAILURE:
    error = action.payload || {message: action.payload.message};
  	return {...state, newMovie: {movie:null, error:error, loading: false}}
  case RESET_NEW_MOVIE:
  	return {...state,  newMovie:{movie:null, error:null, loading: false}}

  case DELETE_MOVIE:
   	return {...state, deletedMovie: {...state.deletedMovie, loading: true}}
  case DELETE_MOVIE_SUCCESS:
  	return {...state, deletedMovie: {movie:action.payload, error:null, loading: false}}
  case DELETE_MOVIE_FAILURE:
    error = action.payload || {message: action.payload.message};
  	return {...state, deletedMovie: {movie:null, error:error, loading: false}}

  default:
    return state;
  }
}