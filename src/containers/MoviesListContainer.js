import {connect} from 'react-redux'
import {fetchMovies, fetchMoviesSuccess, fetchMoviesFailure} from '../actions/movies';
import MoviesList from '../components/MoviesList';


const mapStateToProps = (state) => {
    return {
        moviesList: state.movies.moviesList
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchMovies: () => {
            dispatch(fetchMovies()).then((response) => {
                !response.error ? dispatch(fetchMoviesSuccess(response.payload.data)) : dispatch(fetchMoviesFailure(response.payload.data));
            });
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MoviesList);