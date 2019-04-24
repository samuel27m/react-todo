import React, { Component } from "react";
import DefaultLayout from "../../layouts/Default";
import Task from "./task";
import TaskAdd from "./task/add.js";
import Swal from "sweetalert2/dist/sweetalert2.js";
import "./css/index.css";

class Index extends Component {
    constructor(props) {
        super(props);

        // Default state
        this.state = {
            tasks: this.getTasks()
        };

        this.editTask = this.editTask.bind(this);
    }

    /**
     * Edit tasks status with given ID
     * @param {number} taskId
     */
    toggleTask = taskId => {
        const tasks = this.state.tasks;
        tasks[taskId].pending = !tasks[taskId].pending;

        this.setTasks(tasks);
    };

    /**
     * Add task with given name
     * @param {string} taskName
     */
    addTask = taskName => {
        this.state.tasks.push({
            name: taskName,
            pending: true
        });

        this.setTasks(this.state.tasks);
    };

    /**
     * Edit task name with given ID
     * TODO: Use Bootstrap alerts instead of default JS window.prompt
     * @param {number} taskId
     */
    async editTask(taskId) {
        const tasks = this.state.tasks;

        const { value: taskName } = await Swal.fire({
            title: "Edit task",
            input: "text",
            inputValue: tasks[taskId].name,
            showCancelButton: true,
            inputValidator: value => {
                if (!value) {
                    return "Task name cannot be empty!";
                }
            }
        });

        /** User clicks cancel button */
        if (typeof taskName === "undefined") return;

        tasks[taskId].name = taskName;
        this.setTasks(tasks);
    }

    /**
     * Remove task with given ID
     * @param {number} taskId
     */
    removeTask = taskId => {
        const tasks = this.state.tasks;
        tasks.splice(taskId, 1);
        this.setTasks(tasks);
    };

    /**
     * Get tasks from localStorage object
     * @returns {Array}
     */
    getTasks() {
        return localStorage.getItem("tasks")
            ? JSON.parse(localStorage.getItem("tasks"))
            : [];
    }

    /**
     * Save given tasks in localStorage object
     * @param {Array} tasks
     */
    setTasks(tasks) {
        tasks = this.sortTasks(tasks);

        this.setState({
            tasks: tasks
        });

        localStorage.setItem("tasks", JSON.stringify(tasks));
    }

    /**
     * Sort tasks with following criteria
     * Pending tasks will always show first
     * @param {Array} tasks
     * @returns {Array}
     */
    sortTasks(tasks) {
        tasks.sort(function(a, b) {
            if (a.pending === false && b.pending === true) {
                return 1;
            }

            if (a.pending === true && b.pending === false) {
                return -1;
            }

            return 0;
        });

        return tasks;
    }

    /**
     * Get rendered tasks HTML
     * TODO: Make the key for this renderer to make sense?
     * @returns {string}
     */
    getTasksHtml() {
        const listItems = this.state.tasks.map((task, index) => (
            <Task
                name={task.name}
                pending={task.pending}
                htmlId={"task-" + index}
                id={index}
                key={"task-" + Math.random()}
                toggleTask={this.toggleTask}
                removeTask={this.removeTask}
                editTask={this.editTask}
            />
        ));

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
        return <DefaultLayout content={tasksHtml} />;
    }
}

export default Index;
