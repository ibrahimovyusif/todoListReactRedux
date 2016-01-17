import React, { Component } from 'react';
import { connect } from 'react-redux';

export default class BookDetail extends Component {
	render() {
		console.log('111')

		return (
			<ul>
				<div className="addTodo-bar">
					<input 
						id = 'input_id'
						onChange={event=>this.setState({ text: event.target.value})}
					/>
					<button 
						onClick= {(event) => onClickAction(this.state)} 
					>
						Add ToDo
					</button> 
				</div>
			</ul>
		);
	}
}

	function onClickAction(state) {
		console.log('clicked button to add todo')
		// this.setState(state)
		// this.props.onNewTodoAdded(state);
		document.getElementById('input_id').value='';
	}

function mapStateToProps(state) {
	console.log('aaaa ', state.activeBook)
	return {
		book: state.activeBook
	}
}

export default connect(mapStateToProps)(BookDetail);