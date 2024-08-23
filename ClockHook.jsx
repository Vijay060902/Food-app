import React,{ useState } from 'react'

export const ClockHook = () => {
    let time = new Date().toLocaleTimeString()
     const[now,updatedTime]=useState(time)

     function getTime(){
        time=new Date().toLocaleTimeString()
        updatedTime(time)
    }
  return (
    <div>
        <h1>{now}</h1>
        <button onClick={getTime}>Get Time</button>  
    </div>
  )
}


