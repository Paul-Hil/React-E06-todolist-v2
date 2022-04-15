// == Import npm
import React from 'react';

// == Import
import './styles.scss';

// == Composant
class AddTask extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div className="addTask">
          <form id="taskForm" onSubmit={this.props.addTask}>
              <input type="text" placeholder="Ajouter une tâche" id="inputTask"></input>
          </form>
      </div>
    );
  }
}

// == Export
export default AddTask;
