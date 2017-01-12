import React, {Component, PropTypes} from 'react';
import {Link} from 'react-router';

class MovieDetails extends Component {
    static contextTypes = {
        router: PropTypes.object
    }

    componentWillUnmount() {
        this.props.resetMe();
    }

    componentDidMount() {
        this.props.fetchMovie(this.props.movieId);
    }

    render() {
        const {movie, loading, error} = this.props.activeMovie;
        if (loading) {
            return <div className="container">Loading...</div>;
        } else if (error) {
            return <div className="alert alert-danger">{error.message}</div>
        } else if (!movie) {
            return <span />
        }

        return (
            <div className="container">
                <h3>{movie.title}</h3>
                <h6>Categories: {movie.categories}</h6>
                <p>{movie.content}</p>
            </div>
        );
    }
}

export default MovieDetails;