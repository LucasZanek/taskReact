import React, { Component } from 'react'
import TaskItem from './TaskItem'
import PropTypes from 'prop-types'


class TaskList extends Component {
    render() {
        return this.props.taskList.map((task) => (
            <TaskItem key={task.id} taskItem={task} deleteTask={this.props.deleteTask} markComplete={this.props.markComplete} />
        ))
    }
}

TaskList.propTypes = {
    taskList: PropTypes.array.isRequired
}

export default TaskList

