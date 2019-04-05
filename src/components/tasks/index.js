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
        tasks: this.getTasks()
      };

      this.addTask = this.addTask.bind(this);
      this.toggleTask = this.toggleTask.bind(this);
      this.removeTask = this.removeTask.bind(this);
      this.editTask = this.editTask.bind(this);
    }

    toggleTask(taskId) {
      const tasks = this.state.tasks;
      tasks[taskId].pending = !tasks[taskId].pending;
      
      this.setTasks(tasks);
    }

    addTask(taskName) {
      this.state.tasks.push({
        name: taskName,
        pending: true
      });
      
      this.setTasks(this.state.tasks);
    }

    /**
     * TODO: Use Bootstrap alerts instead of default JS window.prompt
     * @param {*} taskId 
     */
    editTask(taskId) {
      const tasks = this.state.tasks;
      tasks[taskId].name = window.prompt('Enter task name');
      
      this.setTasks(tasks);
    }

    removeTask(taskId) {
      const tasks = this.state.tasks;
      tasks.splice(taskId, 1);
      this.setTasks(tasks);
    }

    getTasks() {   
      return localStorage.getItem('tasks') ? JSON.parse(localStorage.getItem('tasks')) : [];
    }

    setTasks(tasks) {
      tasks = this.sortTasks(tasks);

      this.setState({
        tasks: tasks
      });

      localStorage.setItem('tasks', JSON.stringify(tasks));
    }

    sortTasks(tasks) {
      tasks.sort(function (a, b) {
        if (a.pending === false && b.pending === true) {
          return 1;
        }

        if (a.pending === true &&  b.pending === false) {
          return -1;
        }

        return 0;
      });
      
      return tasks;
    }

    /** TODO: Make the key for this renderer to make sense? */
    getTasksHtml() {
      const listItems = this.state.tasks.map((task, index) =>
        <Task name={task.name} pending={task.pending} htmlId={'task-' + index} id={index} key={'task-' + Math.random()} 
          handler={this.toggleTask} removeHandler={this.removeTask} editHandler={this.editTask} />
      );

      return listItems;
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