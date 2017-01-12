import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import MovieDetailsContainer from '../containers/MovieDetailsContainer.js';

class MoviesShow extends Component {
    static contextTypes = {
        router: PropTypes.object
    };

    onDeleteClick() {
        this.props.deleteMovie(this.props.params.id)
            .then(() => { this.context.router.push('/'); });
    }

    render() {
        return (
            <div className='container'>
              <MovieDetailsContainer id={this.props.params.id}/>
            </div>
        );
    }
}

export default MoviesShow;