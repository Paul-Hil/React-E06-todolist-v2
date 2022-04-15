// == Import npm
import React from 'react';

// == Import
import './styles.scss';

// == Composant
class TaskCard extends React.Component {
  constructor(props){
    super(props)
  }
  render() {
    if(this.props.taskData.done) {
      return (
          <div key={'task-' + this.props.taskData.id} className='inactive'>
            <input type="checkbox" id={'task-' + this.props.taskData.id} defaultChecked onChange={this.props.activeTask}></input>
            <label htmlFor={'task-' + this.props.taskData.id}>{this.props.taskData.label}</label>
          </div>
      )
    } else {
        return (
          <div key={'task-' + this.props.taskData.id} className='active'>
          <input type="checkbox" id={'task-' + this.props.taskData.id} onChange={this.props.activeTask}></input>
          <label htmlFor={'task-' + this.props.taskData.id}>{this.props.taskData.label}</label>
        </div>
      );
    }
  }
}

// == Export
export default TaskCard;
