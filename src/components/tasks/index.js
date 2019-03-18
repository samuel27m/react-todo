import React, { Component } from 'react';
import DefaultLayout from '../../layouts/Default';
import Task from './task';
import './css/index.css';

class Index extends Component {

    getTasks() {
        return (
            <div className="tasks-wrapper">
                <h3>My tasks</h3>
                <Task name="123" id="task1" pending="true" />
                <Task name="321" id="task2" pending="false" />
            </div>
        );
    }

    render() {
      return (
        <DefaultLayout content={this.getTasks()} />
      );
    }
}
  
export default Index;