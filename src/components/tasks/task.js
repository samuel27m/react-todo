import React, { Component } from 'react';
import FontAwesomeIcon from '../../layouts/plugins/FontAwesome';

class Task extends Component {
	render() {
		return (
			<div>
				<div className='card'>
					<div className='card-body task'>
						<div className='custom-control custom-checkbox'>
							<input
								type='checkbox'
								className='custom-control-input'
								id={this.props.htmlId}
								checked={!this.props.pending}
								onChange={() =>
									this.props.toggleTask(this.props.id)
								}
							/>

							<label
								className='custom-control-label'
								htmlFor={this.props.htmlId}
							>
								<span>{this.props.name}</span>
							</label>

							<div className='actions'>
								<span
									className='edit-task'
									onClick={() =>
										this.props.editTask(this.props.id)
									}
								>
									<FontAwesomeIcon icon='pencil-alt' />
								</span>

								<span
									className='remove-task'
									onClick={() =>
										this.props.removeTask(this.props.id)
									}
								>
									<FontAwesomeIcon icon='trash-alt' />
								</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Task;
