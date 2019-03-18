import React, { Component } from 'react';

class Task extends Component {

    constructor(props) {
        super(props);
        this.state = { pending: this.props.pending === true };
        this.toggleTask = this.toggleTask.bind(this);
    }

    toggleTask() {
        console.log('task toggle');
        this.setState({ pending: !this.state.pending });
    }

    getTaskDescription() {
        if(this.state.pending === false) {
            return <span><s>{this.props.name}</s></span>;
        }

        return <span>{this.props.name}</span>;
    }

    render() {
        return (
            <div className="card">
                <div className="card-body">
                    <div className="custom-control custom-switch">
                        <input type="checkbox" className="custom-control-input" id={this.props.id} defaultChecked={!this.state.pending} onChange={this.toggleTask} />
                        <label className="custom-control-label" htmlFor={this.props.id}>{this.getTaskDescription()}</label>
                    </div>
                </div>
            </div>
        );
    }
}
  
export default Task;