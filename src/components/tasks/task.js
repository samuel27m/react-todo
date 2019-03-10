import React, { Component } from 'react';

class Task extends Component {

    render() {
        return (
            <div className="card">
                <div className="card-body">
                    <div className="custom-control custom-switch">
                        <input type="checkbox" className="custom-control-input" id={this.props.id} />
                        <label className="custom-control-label" for={this.props.id}>{this.props.name}</label>
                    </div>
                </div>
            </div>
        );
    }
}
  
export default Task;