import React, { Component } from 'react'


export default class  extends Component {
    constructor(props) {
        super(props);
        this.state={
          isLoggedIn:true,
          name:'Vijay'
        }
        
    }
    
  render() {
    return(this.state.isLoggedIn)&&<h1>welcome {this.state.name}....</h1>
   

  }
}


// if(this.state.isLoggedIn){
//   return<h1>welcome {this.state.name}....</h1>
// }
// else{
//   return<h1>welcome sirr....</h1>
// }



// let message;
// if(this.state.isLoggedIn){
//   message = <h1>welcome {this.state.name}....</h1>
// }
// else{
//   message = <h1>welcome sirr....</h1>
// }
// return<h1>{message}</h1>



// return(this.state.isLoggedIn)?<h1>welcome {this.state.name}....</h1>:<h1>welcome sirr....</h1>
