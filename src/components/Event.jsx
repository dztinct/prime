import React from 'react'

const Event = () => {

    const shoot = () => {
        alert("What a shot!")
    }
    
  return (
    <div>
      <button onClick={shoot}><h1>Take the shot!</h1></button>
    </div>
  )
}

export default Event
