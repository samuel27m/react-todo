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
                <div className="form-group col-sm-12">
                    <input type="text" className="form-control" id="addTask" ref={(el) => this.name = el} placeholder="What do you need to do?" required autoFocus />
                </div>
                
            </form>
        );
    }
}
  
export default Add;