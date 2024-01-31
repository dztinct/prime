import React from 'react'
import Map from './Map'
import MapTwo from './MapTwo'

const ConditTwo = () => { 
  const age = 17

  return (
    <div>
      {age > 18 ? <Map/> : <MapTwo/>}
    </div>
  )
}

export default ConditTwo
