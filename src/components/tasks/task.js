import React, { Component } from 'react';
import FontAwesomeIcon from '../../layouts/plugins/FontAwesome';

class Task extends Component {
	render() {
		const { id, htmlId } = this.props;

		return (
			<div>
				<div className='card'>
					<div className='card-body task'>
						<div className='custom-control custom-checkbox'>
							<input
								type='checkbox'
								className='custom-control-input'
								id={htmlId}
								checked={!this.props.pending}
								onChange={() =>
									this.props.toggleTask(id)
								}
							/>

							<label
								className='custom-control-label'
								htmlFor={htmlId}
							>
								<span>{this.props.name}</span>
							</label>

							<div className='actions'>
								<span
									className='edit-task'
									onClick={() =>
										this.props.editTask(id)
									}
								>
									<FontAwesomeIcon icon='pencil-alt' />
								</span>

								<span
									className='remove-task'
									onClick={() =>
										this.props.removeTask(id)
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
