import React from 'react'
import Car from './components/Car'
import CarTwo from './components/CarTwo'
import CarThree from './components/CarThree'
import Styling from './components/Styling'
import StylingTwo from './components/StylingTwo'
import StylingThree from './components/StylingThree'
import State from './components/State'
import Map from './components/Map'
import MapTwo from './components/MapTwo'
import Event from './components/Event'
import EventTwo from './components/EventTwo'
import PreventDefault from './components/PreventDefault'
import TinyThing from './components/TinyThing'
import Form from './components/Form'
import Condit from './components/Condit'
import Effect from './components/Effect'
import Fetch from './components/Fetch'
import User from './components/User'
import Movie from './components/Movie'
import Birthday from './components/Birthday'

const App = () => {
  const carInfo = {
        name: "Ford",
        model: "Mustang"
    }

  const simple = <h1>Hello King</h1>
  return (
    <div>
      {/* <h1>Hello there </h1> */}
      {/* <h4>Prominence is there</h4> */}
      {/* <p>Hardwork and Sacrifice</p> */}
      {/* <Car car="Toyota"/> */}
      {/* <CarTwo brand={carInfo}/> */}
      {/* <CarThree brand="Chevrolet" model="Camaro" year="2022"/> */}
      {/* {simple} */}
      {/* <Styling/> */}
      {/* <StylingTwo/> */}
      {/* <StylingThree/> */}
      {/* <State/> */}
      {/* <Map/> */}
      {/* <MapTwo/> */}
      {/* <Event/> */}
      {/* <EventTwo/> */}
      {/* <PreventDefault/> */}
      {/* <TinyThing/> */}
      {/* <Form/> */}
      {/* <Condit/> */}
      {/* <Effect/> */}
      {/* <Fetch/> */}
      {/* <User/> */}
      {/* <Movie/ > */}
      <Birthday/>
    </div>
  )
}

export default App