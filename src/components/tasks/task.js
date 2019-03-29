import React, { Component } from 'react';
import FontAwesomeIcon from '../../layouts/plugins/FontAwesome';

class Task extends Component {

    constructor(props) {
        super(props);
        this.toggleTask = this.toggleTask.bind(this);
        this.cardClick = this.cardClick.bind(this);
        this.removeTask = this.removeTask.bind(this);
    }

    cardClick(e) {
        /** TODO: Separate card from remove button and try to remove this ugly condition. */
        // if (e.target.className === 'custom-control-input' || 
        //     e.target.className === 'custom-control-label' ||
        //     e.target.parentNode.parentNode.className === 'remove-task'
        // ) 
        //     return;

        this.toggleTask();
    }

    toggleTask() {
        this.props.handler(this.props.id);
    }

    removeTask() {
        this.props.removeHandler(this.props.id);
    }

    getTaskDescription() {
        if(this.props.pending === false) {
            return <span><s>{this.props.name}</s></span>;
        }

        return <span>{this.props.name}</span>;
    }

    /**
     * TODO: CSS for this
     * Make it pretty please :)
     */
    render() {
        return (
            <div>
                <div className="card" onClick={this.cardClick}>
                    <div className="card-body">
                        <div className="custom-control custom-switch">
                            <input type="checkbox" className="custom-control-input" id={this.props.htmlId} checked={!this.props.pending} />
                            <label className="custom-control-label" htmlFor={this.props.htmlId}>
                                {this.getTaskDescription()}
                            </label>
                        </div>
                    </div>
                </div>
                <div className="card-body" onClick={this.removeTask}>
                    <span className="remove-task">
                        <FontAwesomeIcon icon="times" />
                    </span>
                </div>
            </div>
        );
    }
}
  
export default Task;