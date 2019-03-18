import React, { Component } from 'react';
import DefaultLayout from '../../layouts/Default';
import Task from './task';
import TaskAdd from './task/add.js';
import './css/index.css';

class Index extends Component {

    constructor(props) {
      super(props);

      // Default state
      this.state = {
        tasks: [
          {
            name: "task 1",
            pending: true
          },
          {
            name: "task 2",
            pending: false
          }
        ]
      };

      this.addTask = this.addTask.bind(this);
    }
    
    getTasksHtml() {
      const listItems = this.state.tasks.map((task, index) =>
        <Task name={task.name} pending={task.pending} id={'task-' + index} key={'task-' + index}  />
      );

      return listItems;
    }

    addTask(taskName) {
      this.state.tasks.push({
        name: taskName,
        pending: true
      });

      this.setState({
        tasks: this.state.tasks
      });
    }


    render() {
      const tasksHtml = (
        <div className="tasks-wrapper">
            <TaskAdd handler={this.addTask} /> 
            <h3>My tasks</h3>
            {this.getTasksHtml()}
        </div>
      );
      return (
        <DefaultLayout content={tasksHtml} />
      );
    }
}
  
export default Index;