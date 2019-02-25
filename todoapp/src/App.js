import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Todo from './Todo/Todo'
import Basictodo1 from './BASICTODO/Basictodo1'
import Basictodo2 from './BASICTODO/Basictodo2'

class App extends Component {
  render() {
    return (
      <div className="App">
      {/* <Basictodo2/> */}
      {/* <Basictodo1/> */}
     <Todo/>
      </div>
    );
  }
}

export default App;
