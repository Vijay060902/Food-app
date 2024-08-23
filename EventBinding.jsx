import React, { Component } from 'react'

export default class EventBinding extends Component {
    constructor(props) {
        super(props);
        this.state={
            message:"Javascript  has been completed successfully"
        }   
        this.message=this.message.bind(this)
    }
    message(){
      this.setState({
        message:"reactJS has been started"
    })
  }

    message1 =() => {
      this.setState({
        message:"reactJS has been started successfully"
    })
 
 

    }
    

  render() {
    return (
      <div>
        <h1>{this.state.message}</h1>
        <button onClick={this.message.bind(this)}>Get message</button>
        <button onClick={this.message}>Get message-constructor</button>

        <button onClick={()=>this.message()}>Get message- arrow</button>

        <button onClick={this.message1}>Get message-arrow function</button>

      </div>
    )
  }
}
