import React from 'react'
import MovieCard from './MovieCard'



const MovieList = ({ movie }) => {
    return (
        <div className='movie-list'>
            {movie.map((film) => (<MovieCard film={film} />))}
        </div>
    )
}

export default MovieList
