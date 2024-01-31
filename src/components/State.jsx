import React, { useState } from 'react'

const State = () => {
    const [time, setTime] = useState(0)
    const add = () => {
        setTime(time + 1)
    }
  return (
    <div style={{ display:'flex', justifyContent:'center', alignItems: 'center', height:"100vh" }}>
      <h1>{time}</h1>
      <button onClick={add} style={{ margin:'2%', padding: '1%' }}>+</button>
    </div>
  )
}

export default State
