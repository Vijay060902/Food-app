import React, { Component } from 'react'

export default class HoverCount extends Component {
    constructor(props) {
        super(props);
        this.state={
            count:0
        }
        this.increment=this.increment.bind(this)    
    }
    increment(){
        this.setState({
            count:this.state.count+1

        })
    
    }
    
  render() {
    return (
      <div>
        <h1 onMouseOver={this.increment}>HoverCount :{this.state.count}</h1>

        
      </div>
    )
  }
}
