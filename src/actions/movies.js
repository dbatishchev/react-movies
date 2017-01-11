import axios from 'axios';

//Movie list
export const FETCH_MOVIES = 'FETCH_MOVIES';
export const FETCH_MOVIES_SUCCESS = 'FETCH_MOVIES_SUCCESS';
export const FETCH_MOVIES_FAILURE = 'FETCH_MOVIES_FAILURE';

//Create new movie
export const CREATE_MOVIES = 'CREATE_MOVIE';
export const CREATE_MOVIE_SUCCESS = 'CREATE_MOVIE_SUCCESS';
export const CREATE_MOVIE_FAILURE = 'CREATE_MOVIE_FAILURE';

//Fetch movie
export const FETCH_MOVIE = 'FETCH_MOVIE';
export const FETCH_MOVIE_SUCCESS = 'FETCH_MOVIE_SUCCESS';
export const FETCH_MOVIE_FAILURE = 'FETCH_MOVIE_FAILURE';

//Delete movie
export const DELETE_MOVIE = 'DELETE_MOVIE';
export const DELETE_MOVIE_SUCCESS = 'DELETE_MOVIE_SUCCESS';
export const DELETE_MOVIE_FAILURE = 'DELETE_MOVIE_FAILURE';

const ROOT_URL = location.href.indexOf('localhost') > 0 ? 'http://localhost:3000/api' : '/api';

export function fetchMovies() {
  const request = axios({
    method: 'get',
    url: `${ROOT_URL}/movies`,
    headers: []
  });

  return {
    type: FETCH_POSTS,
    payload: request
  };
}

export function fetchMoviesSuccess(movies) {
  return {
    type: FETCH_POSTS_SUCCESS,
    payload: movies
  };
}

export function fetchMoviesFailure(error) {
  return {
    type: FETCH_POSTS_FAILURE,
    payload: error
  };
}

export function createMovie(props, tokenFromStorage) {
  const request = axios({
    method: 'movie',
    data: props,
    url: `${ROOT_URL}/movies`,
    headers: {
      'Authorization': `Bearer ${tokenFromStorage}`
    }
  });

  return {
    type: CREATE_POST,
    payload: request
  };
}

export function createMovieSuccess(newMovie) {
  return {
    type: CREATE_POST_SUCCESS,
    payload: newMovie
  };
}

export function createMovieFailure(error) {
  return {
    type: CREATE_POST_FAILURE,
    payload: error
  };
}

export function fetchMovie(id) {
  const request = axios.get(`${ROOT_URL}/movies/${id}`);

  return {
    type: FETCH_POST,
    payload: request
  };
}


export function fetchMovieSuccess(activeMovie) {
  return {
    type: FETCH_POST_SUCCESS,
    payload: activeMovie
  };
}

export function fetchMovieFailure(error) {
  return {
    type: FETCH_POST_FAILURE,
    payload: error
  };
}

export function deleteMovie(id, tokenFromStorage) {
  const request = axios({
    method: 'delete',
    url: `${ROOT_URL}/movies/${id}`,
    headers: {
      'Authorization': `Bearer ${tokenFromStorage}`
    }
  });
  return {
    type: DELETE_POST,
    payload: request
  };
}

export function deleteMovieSuccess(deletedMovie) {
  return {
    type: DELETE_POST_SUCCESS,
    payload: deletedMovie
  };
}

export function deleteMovieFailure(response) {
  return {
    type: DELETE_POST_FAILURE,
    payload: response
  };
}