import React from 'react'
import MovieCard from './MovieCard'

const MovieList = (props) => {
	let movieComponents = props.movies.map(movie => {
		return <MovieCard chooseMovie={props.chooseMovie} key={movie.id} movie={movie}/>
	})

	return (
		<div>
			{movieComponents}
		</div>
	)
}

export default MovieList