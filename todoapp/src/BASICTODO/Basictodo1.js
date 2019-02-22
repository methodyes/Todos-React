import React, { Component } from "react";

class Basictodo1 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "Alert box for input",
      input: ""
    };
  }
  changeHandler = type => {
    this.setState({
      [type.target.name]: type.target.value
    });
  };
  pressEnter=(e)=>{
      var i=this.state.input
  if(e.which===13){
    //   alert(`${this.state.input}`) 
    alert(`${i}`)
  }
  }

  render() {
    var { title, input } = this.state; /*destruction*/
    return (
      <div>
        <h2>{title}</h2>
        <form>
          <input type="text" name="input" value={input} onChange={this.changeHandler} 
          onKeyDown={this.pressEnter}/>
        </form>
      </div>
    );
  }
}

export default Basictodo1;
