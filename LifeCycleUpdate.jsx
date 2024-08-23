import React, { Component } from 'react'

export default class LifeCycleUpdate extends Component {
    constructor(props) {
        super(props);
        this.state={
            favColor:'Red'
        }
        this.changeColor=this.changeColor.bind(this)
        console.log("Constructor executes before all other methods");
    }

    changeColor(){
        setTimeout(()=>this.setState({
            favColor:"Orange"
        }),3000)

        setTimeout(()=>this.setState({
            favColor:"Blue"
        }),6000)

        setTimeout(()=>this.setState({
            favColor:"Yellow"
        }),10000)
  
    }
    
    // shouldComponentUpdate(){
    //     console.log("shouldComponentUpdate");
    //     return true;
    
    // }
    getSnapshotBeforeUpdate(preProps,preState){
        console.log("getSnapshotBeforeUpdate ");
        document.getElementById('before').innerHTML="Before Updation: "+preState.favColor
       

    }
    componentDidUpdate(){
        console.log("componentDidUpdate ");
        document.getElementById('after').innerHTML="after Updation: "+this.state.favColor

    }

    render() {
        // const {favcolor}=this.state
        
        console.log("render Executes");
        return (
          <div>
            <h1>Favourite color is: {this.state.favColor}</h1>
            <h1 id='before'></h1>
            <h1 id='after'></h1>
            <button onClick={this.changeColor}>Change color</button>
          </div>
        )
      }
    }
    