import React, { Component } from 'react'

 class Todo extends Component {
     constructor(props) {
       super(props)
     
       this.state = {
           title : "My todo app",
           inputData : "",
           list : [],

          
       }
       this.clickToChange=this.clickToChange.bind(this)
       this.clickToAdd=this.clickToAdd.bind(this)
     }
     clickToChange(type){
     this.setState({
        inputData : type.target.value
     })
     }
     clickToAdd(elem){
    var elem = this.state.inputData
    this.state.list.push(elem)
    this.setState({
        list : this.state.list,
        inputData : "",
    })
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
        <div>
            <ul>
                {this.state.list.map((input)=>{
                    return (
                        <li>{input}</li>
                    )
                })}
            </ul>
        </div>
      </div>
    )
  }
}
export default Todo