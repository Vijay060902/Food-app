import React from 'react'

export default function Besant(props) {
    if (props.name=='pinky'){
        throw new Error("pinky is not in besant")
    }
    const {name,id}=props
  return <h1>{id + ":" +name }</h1>
}

