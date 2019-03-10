import React, { Component } from 'react';
import DefaultLayout from '../../layouts/Default';
import Task from './task';
import './css/index.css';

class Index extends Component {

    getTasks() {
        return (
            <div className="tasks-wrapper">
                <h3>Pending tasks</h3>
                <Task name="123" id="task1" />
                <Task name="321" id="task2"/>
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