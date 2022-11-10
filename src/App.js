import React from 'react';
import logo from './logo.svg';
import './App.css';
import Todo from './Components/Todo';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Todo />

          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>


      </div>
    );
  }
}

export default App;