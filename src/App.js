import React from 'react';
import logo from './logo.svg';
import './App.css';
import Todo from './Components/Todo';
import { Button } from 'bootstrap';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Todo />


        </header>


      </div>
    );
  }
}

export default App;
