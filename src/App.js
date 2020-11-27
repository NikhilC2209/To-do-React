import React from 'react';
import './App.scss';

import TodoList from "./components/TodoList/TodoList.js";

function App() {
  return (
    <div className="App">
      <h1 
        className = "header">
          To-DO APP
      </h1>
      <TodoList />
    </div>
  );
}

export default App;
