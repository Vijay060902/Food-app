import React, { Component } from 'react'

export default class LifeCycleUnmount extends Component {
    constructor(props) {
        super(props);
        this.state={
            display:true
        }
        this.removeheader=this.removeheader.bind(this)
        
    }
    removeheader(){
        this.setState({
            display:false
        })
       

    }
    
  render() {
    let header;
    if(this.state.display){
        header=<HeaderComponent/>
    }


    return (
      <div>
        {header}
        <button onClick={this.removeheader}>Remove Header</button>
        
      </div>
    )
  }
}



export  class HeaderComponent extends Component {
  render() {
    return (
      <div>
        <h1> vijay M</h1>
        
      </div>
    )
  }
}
