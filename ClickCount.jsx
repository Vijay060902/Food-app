import React, { Component } from 'react'

export default class ClickCount extends Component {
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
        <h1>Click Count:{this.state.count} </h1>
        <button onClick={this.increment}>count</button>
        
      </div>
    )
  }
}
