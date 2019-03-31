import React, { Component } from 'react';
import FontAwesomeIcon from '../../layouts/plugins/FontAwesome';

class Task extends Component {

    constructor(props) {
        super(props);
        this.toggleTask = this.toggleTask.bind(this);
        this.removeTask = this.removeTask.bind(this);
    }

    toggleTask() {
        this.props.handler(this.props.id);
    }

    removeTask() {
        this.props.removeHandler(this.props.id);
    }

    render() {
        return (
            <div>
                <div className="card">
                    <div className="card-body">
                        <div className="custom-control custom-checkbox">
                            <input type="checkbox" className="custom-control-input" id={this.props.htmlId} checked={!this.props.pending} onChange={this.toggleTask} />
                            <label className="custom-control-label" htmlFor={this.props.htmlId}>
                                <span>{this.props.name}</span>
                            </label>
                            <span className="remove-task" onClick={this.removeTask}>
                                <FontAwesomeIcon icon="trash" />
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
  
export default Task;