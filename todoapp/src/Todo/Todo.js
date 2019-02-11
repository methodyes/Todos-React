import React, { Component } from 'react'

 class Todo extends Component {
     constructor(props) {
       super(props)
     
       this.state = {
           title : "My todo app"
          
       }
     }
     
  render() {
    return (
      <div>
          <h1>{this.state.title}</h1>
        <input
        type="text"
        placeholder="Type your task here!!!"/>
        <button>Add Task</button>
      </div>
    )
  }
}
export default Todo