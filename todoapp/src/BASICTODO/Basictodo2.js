import React, { Component } from 'react'

 class Basictodo2 extends Component {
     constructor(props) {
       super(props)
     
       this.state = {
          title : 'Map arrray when press the enter button ',
          input : '',
          list :[]
       }
     }
     changeHandler=(t)=>{
         this.setState({
             input : t.target.value
         })
     }
     pressEnter=(e)=>{
        //  var l = this.state.list;
         var i= this.state.input;
      if(e.which===13){
    //    l.push(i)
    this.state.list.push(i)
       this.setState({
        //    list : l,
        list : this.state.list,
           input : '',
          

       })
       e.preventDefault()
      }
     }
     
  render() {
      var {title,input,list}=this.state
    return (
      <div>
          <h2>{title}</h2>
        
            <input
            onKeyDown={this.pressEnter}
            type="text"
            value={input}
            onChange={this.changeHandler}
            />
     
         <div>
        <ol>
            {list.map((data)=>{
                return (
                    <li>{data}</li>
                )
            })}
        </ol>
        </div>
      
        
      </div>
    )
  }
}

export default Basictodo2
