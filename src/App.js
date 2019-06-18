import React, { Component } from 'react';
import './App.css';
import TaskList from './Components/TaskList'

// 58.533
class App extends Component {
  state = {
    taskList: [
      {
        title: "Take out the trash",
        id: 1,
        completed: false
      },
      {
        title: "Study React",
        id: 2,
        completed: true
      },
      {
        title: "Eat the dinner",
        id: 3,
        completed: false
      }
    ]
  }


  // Toggle Completed the task selected
  markComplete = (id) => {
    this.setState({
      taskList: this.state.taskList.map(task => {
        if (task.id === id) {
          task.completed = !task.completed
        }
        return task
      })
    })
  }

  // Delete task by id
  deleteTask = (id) => {
    this.setState({
      taskList: [...this.state.taskList.filter(task => task.id !== id)]
    })
  }

  render() {
    return (
      <div className="App" >
        <TaskList taskList={this.state.taskList} deleteTask={this.deleteTask} markComplete={this.markComplete} />
      </div>
    );
  }
}

export default App;
