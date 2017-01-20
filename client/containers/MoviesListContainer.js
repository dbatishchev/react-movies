import {connect} from 'react-redux'
import {fetchMovies, fetchMoviesSuccess, fetchMoviesFailure} from '../actions/movies';
import MoviesList from '../components/MoviesList';


const mapStateToProps = (state) => {
    return {
        moviesList: state.movies.moviesList
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchMovies: () => {
            dispatch(fetchMovies())
                .payload
                .then((response) => {
                    if (!response.error) {
                        dispatch(fetchMoviesSuccess(response.data));
                    } else {
                        dispatch(fetchMoviesFailure(response.data));
                    }
                });
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(MoviesList);