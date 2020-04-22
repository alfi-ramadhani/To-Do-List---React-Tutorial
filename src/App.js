import React, { Component } from 'react';
import Todos from './components/Todos';
import TodoItem from './components/TodoItem';
import './App.css';

    // Dalam tutorial :
    // "react": "^16.7.0",
    // "react-dom": "^16.7.0",
    // "react-scripts": "2.1.2" 
    
    // Dalam ni :
    // "react": "^16.13.1",
    // "react-dom": "^16.13.1",
    // "react-scripts": "3.4.1"

// function App() {
class App extends Component {
  state = {
    todos: [
      {
        id: 1,
        title: 'Take out trash',
        completed: false
      },
      {
        id: 2,
        title: 'Take in bin',
        completed: false
      },
      {
        id: 3,
        title: 'Clean bin',
        completed: false
      }
    ]
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
        <p>App Page</p>
        <Todos todos={this.state.todos} />
        </header>
      </div>
    );
  }
}

export default App;