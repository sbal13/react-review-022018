import React from 'react'

const MovieCard = (props) => {
	return (
		<div onClick={() => props.chooseMovie(props.movie)}>
			{props.movie.title}
		</div>
	)
}

export default MovieCard