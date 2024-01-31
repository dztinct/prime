import React from 'react'

const EventTwo = () => {

    const freekick = (data) => {
        alert(data)
    }

  return (
    <div>
      <button onClick={()=>freekick("Take the shot")}><h1>That was a foul</h1></button>
    </div>
  )
}

export default EventTwo
