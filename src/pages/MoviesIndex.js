import React, { Component } from 'react';
import MoviesList from '../containers/MoviesListContainer.js';

class MoviesIndex extends Component {
    render() {
        return (
            <div>
                <MoviesList />
            </div>
        );
    }
}

export default MoviesIndex;