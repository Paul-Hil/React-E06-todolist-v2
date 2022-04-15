// == Import npm
import React from 'react';

// == Import
import './styles.css';
import ListTask from '../ListTask';
import AddTask from '../AddTask';
import tasksListData from 'src/data/tasks'

// == Composant
class App extends React.Component {
  constructor(props) {
    super(props)

    this.addNewTask = this.addNewTask.bind(this);
    this.activeTask = this.activeTask.bind(this);

    var counterTask = 0;

    tasksListData.forEach(task => {
      if(task.done === false) {
        counterTask++;
      }
    });

    this.state = {
      tasksList : tasksListData,
      countTask : counterTask,
    }
  }
  
  addNewTask(evt) {
    evt.preventDefault();

    const taskId = this.state.tasksList.length + 1; 

    const newTask = {
      id: taskId,
      label: evt.target[0].value,
      done: false,
    };

    this.setState({
      tasksList: [...this.state.tasksList, newTask], // Add new element in array state
      countTask: this.state.countTask + 1,
    })
  }

  activeTask(evt) {
    let currentTaskId = (evt.currentTarget.id.replace('task-', ''));
    currentTaskId = parseInt(currentTaskId);

    this.state.tasksList.map((task, index) => {
      if(task.id === currentTaskId) {
        const taskIndex = index;
        if(task.done === true) {
          var newTaskList = [...this.state.tasksList];
          newTaskList[taskIndex].done = false;
        } else {
            var newTaskList = [...this.state.tasksList];
            newTaskList[taskIndex].done = true;
          }

          this.setState({
            tasksList: newTaskList,
          });
      }
    });
  }

  render() {
    return (
      <div className="app">
        <AddTask addTask={this.addNewTask}/>

        <ListTask taskListData={this.state.tasksList} countTask={this.state.countTask} activeTask={this.activeTask}/>
      </div>
    );
  }
}


// == Export
export default App;
