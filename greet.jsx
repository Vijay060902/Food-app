import React from 'react'

export default function Greet() {
    let time= new Date(2024,22,7,15).getHours()

    let greetMessage=''

    const cusomStyle={
        color:''
    }

    if(time<=12){
        greetMessage="Good Morning..."
        cusomStyle.color='green'
    }else if(time<=16){
        greetMessage="Good Evening..."
        cusomStyle.color='red'

    }
    else if(time<=21){
        greetMessage="Good night..."
        cusomStyle.color='blue'

    }
  return (
    <div>
        <h1 style={cusomStyle}>{greetMessage}</h1>
      
    </div>
  )
}
