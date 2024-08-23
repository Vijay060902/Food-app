import React, { Component } from 'react'
import ChildComponent from './ChildComponent';

export default class ParentComponent extends Component {
    constructor(props) {
        super(props);
        this.state={
            message:"Message from Parent Component"
        }
    }
    message(){
        alert(this.state.message)
    }
  render() {
    return (
      <div>
        <ChildComponent msg={this.message.bind(this)}/>
        
      </div>
    )
  }
}

