import React, { Component } from 'react'
import Todosub from './Todosub'

 class Todo extends Component {
     constructor(props) {
       super(props)
     
       this.state = {
           title : "My todo app",
           inputData : "",
           list : [],

          
       }
       this.inputref=React.createRef()

       this.clickToChange=this.clickToChange.bind(this)
       this.clickToAdd=this.clickToAdd.bind(this)
       this.enterTo=this.enterTo.bind(this)
     }
     clickToChange(type){
     this.setState({
        inputData : type.target.value
     })
     }
     clickToAdd(elem){
        
    var elem = this.state.inputData
    if(elem===""){
        return
    }
    this.state.list.push(elem)
    this.setState({
        list : this.state.list,
        inputData : "",
    })
     }
     enterTo(e){
         if(e.which===13){
             return (
             this.clickToAdd(this.state.inputData)
             )
         }
     }
     componentDidMount(){
       console.log(this.inputref)
     }
  render() {
    return (
      <div>
          <h1 style={{color:'red'}}>{this.state.title}</h1>
        <input
        onKeyDown={this.enterTo}
        type="text"
        // placeholder="Type your task here!!!"
        ref={this.inputref}
        value={this.state.inputData}
        onChange={this.clickToChange}
        />
        <button onClick={this.clickToAdd}>Add Task</button>
        <div style={{color:"dark blue"}}>
            <ul>
                {this.state.list.map((input)=>{
                    return (
                        // <li>{input}</li>
                        <li key="1"><Todosub input={input}/></li>
                    )
                })}
            </ul>
        </div>
      </div>
    )
  }
}
export default Todo