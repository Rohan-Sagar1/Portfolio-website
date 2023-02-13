import React, { useState } from 'react'

let id = 0;

const INITIAL_STATES = [
  { id: id++, label: "Hello! My name is Rohan Sagar"},
  { id: id++, label: "I am a junior at Purdue University (May 2024)"},
  { id: id++, label: "Major: Computer Engineering, Minor: Econoomics"},
]

const COMMON_SYNTAX = [
  { id: 1, label: "function"}
  
]

function Terminal(props) {
  const [terminalOutputs, setTerminalOutputs] = useState(INITIAL_STATES);


  return (
    <div>Home</div>
  )
}

export default Terminal