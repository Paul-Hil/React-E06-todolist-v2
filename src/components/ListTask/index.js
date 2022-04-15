// == Import npm
import React from 'react';

// == Import
import './styles.scss';
import TaskCard from '../TaskCard';

// == Composant
class ListTask extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return(
      <div>
        <div id="listTask" >
          <h3><span className="taskNumber">{this.props.countTask}</span> tâches en cours</h3>
        </div>

        <div id="todo">
            {this.props.taskListData.map((currentTask) => {
              if(currentTask.done === false) {
                return (
                  <TaskCard taskData={currentTask} activeTask={this.props.activeTask}/>
                )
              }
          })}

          {this.props.taskListData.map((currentTask) => {
              if(currentTask.done === true) {
                return (
                  <TaskCard taskData={currentTask} activeTask={this.props.activeTask}/>
                )
              }
          })}
        </div>
      </div>
      );
  }
}

// == Export
export default ListTask;
