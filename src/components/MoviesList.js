import React, {Component} from 'react';
import {Link} from 'react-router';

class MoviesList extends Component {
    componentWillMount() {
        this.props.fetchMovies();
    }

    renderMovies(movies) {
        return movies.map((movie) => {
            return (
                <li className="list-group-item" key={movie._id}>
                    <Link style={{color: "black"}} to={"movies/" + movie._id}>
                        <h3 className="list-group-item-heading">{movie.title}</h3>
                    </Link>
                </li>
            );
        });
    }

    render() {
        const {movies, loading, error} = this.props.moviesList;

        if (loading) {
            return <div className="container"><h1>Movies</h1><h3>Loading...</h3></div>
        } else if (error) {
            return <div className="alert alert-danger">Error: {error.message}</div>
        }

        return (
            <div className="container">
                <h1>Movies</h1>
                <ul className="list-group">
                    {this.renderMovies(movies)}
                </ul>
            </div>
        );
    }
}


export default MoviesList;