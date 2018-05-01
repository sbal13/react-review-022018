import React from 'react'
import Comments from './Comments'

const MovieDetails = ({selectedMovie, close, addComment}) => {

	const {title, director, release_date, description, comments} = selectedMovie

	return (
		<div style={{borderStyle: "solid"}}>
			<h4>{title}</h4>
			<strong>Directed by: {director}</strong><br/>
			<strong>Released: {release_date}</strong>
			<p>{description}</p>
			<Comments movie={selectedMovie} addComment={addComment} comments={comments}/>
			<button onClick={close}>X</button>
		</div>
	)
}

export default MovieDetails