import React, { Component } from 'react'

 class Todosub extends Component {
  render() {
    return (
      <div>
        <li>{this.props.input}</li>
      </div>
    )
  }
}
export default Todosub