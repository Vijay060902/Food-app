import React, { Component } from 'react'

export default class LifeCycleMount extends Component {
    constructor(props) {
        super(props);
        this.state={
            favcolor:"Red"
        }
        console.log("Constructor executes before all other methods");
    }
    // static getDerivedStateFromProps(props,state){
    //     console.log("getDerivedStateFromProps Executes")
    //     return{favcolor: props.color};
    // }
    componentDidMount(){
        console.log("componentDidMount executed");
        setTimeout(() =>this.setState({
                favcolor:"Blue"
            }),3000)
    }
      
  render() {
    // const {favcolor}=this.state
    
    console.log("render Executes");
    return (
      <div>
        <h1>Favourite color is: {this.state.favcolor}</h1>
        
      </div>
    )
  }
}
