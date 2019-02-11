import React, { Component } from 'react'

 class Todo extends Component {
     constructor(props) {
       super(props)
     
       this.state = {
           title : "My todo app",
           inputData : "",

          
       }
     }
     
  render() {
    return (
      <div>
          <h1>{this.state.title}</h1>
        <input
        type="text"
        placeholder="Type your task here!!!"
        value={this.state.inputData}
        />
        <button>Add Task</button>
      </div>
    )
  }
}
export default Todo