import React from 'react'

class Comments extends React.Component{

	state = {
		text: ""
	}

	handleChange = (event) => {
		this.setState({
			text: event.target.value
		})
	}

	handleSubmit = (event) => {
		event.preventDefault()		
		this.props.addComment(this.state.text, this.props.movie)

		this.setState({
			text: ""
		})
	}

	render(){
		let comments = this.props.comments.map((comment,index) => {
			return <li key={index}>{comment}</li>
		})
		return (
			<div>
				<form onSubmit={this.handleSubmit}>
					<input value={this.state.text} onChange={this.handleChange} placeholder="Enter your comment..."/>
					<input type="submit"/>
				</form>
				<ul>
					{comments}
				</ul>
			</div>
		)
	}
}

export default Comments