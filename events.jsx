import React,{Component} from 'react'

export default function FunctionEvents() {
    function message(){
        alert("Click Event from function components")
    }

  return (
    <div>
        <button onClick={message}> Click Here- Function components</button>
    </div>
  )
}

export class ClassEvents extends Component {
     message(){
        alert("Click Event from Class components")
     }
  render(){
    return (
     <div>
        <button onClick={this.message}> Click Here- Class components</button>

    </div>
  )
}
}

