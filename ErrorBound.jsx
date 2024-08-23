import React, { Component } from 'react'

export default class ErrorBound extends Component {
    constructor(props) {
        super(props);
        this.state={
            hasError:false
        }
        
    }
    static getDerivedStateFromError(){
      console.log("getDerivedStateFromError");
      return{hasError:true}
    }
    componentDidCatch(error,info){
      console.log(error);
      console.log(info);
    }
    
  render() {
    if(this.state.hasError){
        return<h1>Something Wentr wrong</h1>
    } else
    return this.props.children
  }
}
