import React, { Component } from 'react';

class Task extends Component {

    constructor(props) {
        super(props);
        this.toggleTask = this.toggleTask.bind(this);
        this.cardClick = this.cardClick.bind(this);
    }

    cardClick() {
        this.toggleTask();
    }

    toggleTask() {
        this.props.handler(this.props.id);
    }

    getTaskDescription() {
        if(this.props.pending === false) {
            return <span><s>{this.props.name}</s></span>;
        }

        return <span>{this.props.name}</span>;
    }

    render() {
        return (
            <div className="card" onClick={this.cardClick}>
                <div className="card-body">
                    <div className="custom-control custom-switch">
                        <input type="checkbox" className="custom-control-input" id={this.props.htmlId} checked={!this.props.pending} onChange={this.toggleTask}/>
                        <label className="custom-control-label" htmlFor={this.props.htmlId}>{this.getTaskDescription()}</label>
                    </div>
                </div>
            </div>
        );
    }
}
  
export default Task;