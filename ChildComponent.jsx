import React from 'react'

export default function ChildComponent(props) {
  return (
    <div>
        <button onClick={props.msg}>Get msg-message from parent</button>
      
    </div>
  )
}



