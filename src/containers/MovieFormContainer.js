import MoviesForm from '../components/MoviesForm.js';
import { resetNewMovie } from '../actions/movies';
import { connect } from 'react-redux';


const mapDispatchToProps = (dispatch) => {
    return {
        resetMe: () => {
            dispatch(resetNewMovie());
        }
    }
};


function mapStateToProps(state, ownProps) {
    return {
        newMovie: state.movies.newMovie
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(MoviesForm);