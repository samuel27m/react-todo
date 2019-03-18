import React, { Component } from 'react';

class Add extends Component {

    constructor(props) {
        super(props);
        this.state = {value: ''};
    
        this.handleSubmit = this.handleSubmit.bind(this);
      }

    handleSubmit(e) {
        e.preventDefault();

        this.props.handler(this.name.value);
        this.name.value = '';
        this.name.blur();
    }

    render() {
        return (
            <form className="add-task-form row" onSubmit={this.handleSubmit}>
                <div className="form-group col-sm-2">
                    <button type="submit" className="btn btn-primary col-sm-12">Add</button>
                </div>
                <div className="form-group col-sm-10">
                    <input type="text" className="form-control" id="addTask" ref={(el) => this.name = el} placeholder="Add task" required autoFocus />
                </div>
                
            </form>
        );
    }
}
  
export default Add;