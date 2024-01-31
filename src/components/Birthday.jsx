import React, { useState } from 'react'
import personData from '../data/birthday'

const Birthday = () => {
    const [persons, setPersons] = useState(personData)

    const render = persons.map((person, idx) => {
      return(
        <div key={idx}>
          <div>
            <p>{person.name}</p>
          </div>
        </div>
      )
    })
  return (
    <div>
      {render}
    </div>
  )
}

export default Birthday
