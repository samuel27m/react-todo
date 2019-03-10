import React, { Component } from 'react';
import DefaultLayout from './layouts/Default';

class Tasks extends Component {

    getTasks() {
        return (
            <div>
                <p>Test</p>
            </div>
        );
    }

    render() {
      return (
        <DefaultLayout content={this.getTasks()} />
      );
    }
  }
  
  export default Tasks;