import MovieDetails from '../components/MovieDetails.js';
import { fetchMovie, fetchMovieSuccess, fetchMovieFailure, resetActiveMovie, resetDeletedMovie } from '../actions/movies';
import { connect } from 'react-redux';

function mapStateToProps(globalState, ownProps) {
    return {
        activeMovie: globalState.movies.activeMovie,
        movieId: ownProps.id
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchMovie: (id) => {
            dispatch(fetchMovie(id))
                .then((result) => {
                    // Note: Error's "data" is in result.payload.response.data (inside "response")
                    // success's "data" is in result.payload.data
                    if (result.payload.response && result.payload.response.status !== 200) {
                        dispatch(fetchMovieFailure(result.payload.response.data));
                    } else {
                        dispatch(fetchMovieSuccess(result.payload.data))
                    }
                })
        },
        resetMe: () => {
            //clean up both activeMovie(currrently open) and deletedMovie(open and being deleted) states
            dispatch(resetActiveMovie());
            dispatch(resetDeletedMovie());
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(MovieDetails);