import React, { Component } from 'react';

class Add extends Component {
	constructor(props) {
		super(props);
		this.state = { value: '' };
	}

	/**
	 * Handle add task form submittion
	 * @param {Event} e
	 */
	handleSubmit = e => {
		e.preventDefault();
		const { addTask } = this.props;
		
		addTask(this.nameInput.value);
		this.nameInput.value = '';
		
		if (window.navigator.maxTouchPoints || 'ontouchstart' in document) {
			this.nameInput.blur();
		}
	};

	render() {
		return (
			<form className='add-task-form row' onSubmit={this.handleSubmit}>
				<div className='form-group col-sm-12'>
					<input
						type='text'
						className='form-control'
						id='addTask'
						ref={el => (this.nameInput = el)}
						placeholder='What do you need to do?'
						autoComplete='off'
						required
					/>
				</div>
			</form>
		);
	}
}

export default Add;
