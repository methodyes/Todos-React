import React, { Component } from 'react'

 class Todo extends Component {
     constructor(props) {
       super(props)
     
       this.state = {
           title : "My todo app",
           inputData : "",

          
       }
       this.clickToChange=this.clickToChange.bind(this)
       this.clickToAdd=this.clickToAdd.bind(this)
     }
     clickToChange(type){
     this.setState({
        inputData : type.target.value
     })
     }
     clickToAdd(){
         
     }
  render() {
    return (
      <div>
          <h1>{this.state.title}</h1>
        <input
        type="text"
        placeholder="Type your task here!!!"
        value={this.state.inputData}
        onChange={this.clickToChange}
        />
        <button onClick={this.clickToAdd}>Add Task</button>
      </div>
    )
  }
}
export default Todo