import './App.css';
import React from 'react';

import Add from './components/Add';
import List from './components/List';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      id: '',
      tasks: [],
      title: '',
      isEdit: false
    }

    this.handleAdd = this.handleAdd.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
    this.setEdit = this.setEdit.bind(this);
    this.setDisabled = this.setDisabled.bind(this);
  }


  handleAdd(name) {
    this.state.tasks.map((task, index) =>
      task.id = index
    )
    this.setState({
      tasks: [...this.state.tasks, { id: this.state.tasks.length, title: name }], title: name
    })
  }

  handleDelete(index) {
    const newTasks = [...this.state.tasks];
    newTasks.splice(index, 1);
    newTasks.map((task, index) => {
      return task.id = index;
    })
    this.setState({
      tasks: newTasks
    })
  }

  handleEdit(id) {
    const selectedItem = this.state.tasks.find((item, index) => index === id);

    const a = document.querySelectorAll('.Item__btn');
    for (let i = 0; i < this.state.tasks.length; i++) {
      a[i].disabled = true;
    }
    
    this.setState({
      id: id,
      tasks: this.state.tasks,
      title: selectedItem.title,
      isEdit: true
    })
  }

  setDisabled() {
    const a = document.querySelectorAll('.Item__btn');
    for (let i = 0; i < this.state.tasks.length; i++) {
      a[i].disabled = false;
    }
  }

  setEdit(id, value) {
    const newTasks = [...this.state.tasks];
    newTasks.splice(id, 1, { id: id, title: value });
    this.setState({
      id: id,
      tasks: newTasks,
      title: '',
      isEdit: false
    })
  }

  render() {
    return (
      <React.Fragment>
        <Add
          id={this.state.id}
          title={this.state.title}
          tasks={this.state.tasks}
          isEdit={this.state.isEdit}
          handleAdd={this.handleAdd}
          setEdit={this.setEdit}
          setDisabled={this.setDisabled}
        />
        <List
          id={this.state.id}
          tasks={this.state.tasks}
          handleDelete={this.handleDelete}
          handleEdit={this.handleEdit}
        />
      </React.Fragment>
    );
  }
}

export default App;
