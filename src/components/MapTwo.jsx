import React from 'react'

const MapTwo = () => {
    const students = [
        {id: 1, name: "Faruq"},
        {id: 2, name: "Fade"},
        {id: 3, name: "Dami"},
        {id: 4, name: "Aeesha"}
    ]
    return (
        <div>
        {
            students.map((student, idx) => {
                return(
                    <div key={idx}>
                        <h1>{student.name} is good</h1>
                    </div>
                )
            })}
      
    </div>
  )
}

export default MapTwo
