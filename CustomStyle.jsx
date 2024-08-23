import React, { Component } from 'react'
import "./custom.css"


export default class CustomStyle extends Component {
    CustomStyle={
        color:'white',
        backhround:'tomato',
        border:'2px solid black',borderRadius:'30px'
    }
  
  render() {
    return (
      <div>
      <h1 id="head" style={this.CustomStyle}>welcome to react js</h1>
        
      </div>
    )
  }
}
