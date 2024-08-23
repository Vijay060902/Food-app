import React, { Component } from 'react'

export default class Count extends Component {
    constructor(props) {
        super(props);
        this.state={
            count:0
        }
    }
    increment(){
      this.setState (preState =>  ({
        count:preState.count+1
      }),() =>   console.log(this.state.count))
        // this.setState({
        // count:this.state.count+1
        // },()=>console.log("CallBack Function:",this.state.count))
        // console.log(this.state.count);
    }
    increment5(){
       this.increment();
       this.increment();
       this.increment();
       this.increment();
       this.increment();
       this.increment();
  
      

    }
    

  render() {
    return (
      <div>
        <h1>{this.state.count}</h1>
        <button onClick={() => this.increment()}>Increment</button>
        <button onClick={() => this.increment5()}>Increment5</button>
      </div>
    )
  }
}
