import React from 'react'
import MovieList from './MovieList'
import MovieDetails from './MovieDetails'

const API = "https://ghibliapi.herokuapp.com/films"

class MoviesContainer extends React.Component {

	state = {
		movies: [],
		selectedMovie: null
	}

	componentDidMount(){
		fetch(API)
		.then(res => res.json())
		.then(movies => {
			let movieData = movies.map((movie) => {
				return {...movie, comments: []}
			})
			this.setState({
				movies: movieData
			})
		})
	}

	chooseMovie = (movie) => {
		this.setState({
			selectedMovie: movie
		})
	}

	close = () => {
		this.setState({
			selectedMovie: null
		})
	}

	addComment = (comment, movie) => {
		// let movie = this.state.movies.find(movie => {
		// 	return movie.id === movieID
		// })

		let index = this.state.movies.indexOf(movie)
		let copy = [...this.state.movies]

		movie.comments = [...movie.comments, comment]
		copy[index] = movie 

		this.setState({
			movies: copy 
		})
	}


	render(){
		return (
			<div>
				{this.state.selectedMovie ? <MovieDetails addComment={this.addComment} close={this.close} selectedMovie={this.state.selectedMovie}/> : null}
				<MovieList chooseMovie={this.chooseMovie} movies={this.state.movies}/>

			</div>
		)
	}
}

export default MoviesContainer