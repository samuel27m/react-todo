import React, { Component } from 'react';
import FontAwesomeIcon from '../../layouts/plugins/FontAwesome';

class Task extends Component {

    constructor(props) {
        super(props);
        this.toggleTask = this.toggleTask.bind(this);
        this.removeTask = this.removeTask.bind(this);
        this.editTask = this.editTask.bind(this);
    }

    /**
     * Toggle task status
     */
    toggleTask() {
        this.props.handler(this.props.id);
    }

    /**
     * Edit task name
     */
    editTask() {
        this.props.editHandler(this.props.id);
    }

    /**
     * Remove task
     */
    removeTask() {
        this.props.removeHandler(this.props.id);
    }

    render() {
        return (
            <div>
                <div className="card">
                    <div className="card-body task">
                        <div className="custom-control custom-checkbox">
                            <input type="checkbox" className="custom-control-input" id={this.props.htmlId} checked={!this.props.pending} onChange={this.toggleTask} />
                            <label className="custom-control-label" htmlFor={this.props.htmlId}>
                                <span>{this.props.name}</span>
                            </label>
                            
                            <div className="actions">
                                <span className="edit-task" onClick={this.editTask}>
                                    <FontAwesomeIcon icon="pencil-alt" />
                                </span>

                                <span className="remove-task" onClick={this.removeTask}>
                                    <FontAwesomeIcon icon="trash-alt" />
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