import React from 'react';
import logo from './logo.svg';
import './App.css';
import Todo from "./components/Todo";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>Todo List</h2>
        <Todo />
      </header>
    </div>
  );
}

export default App;
