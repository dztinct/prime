import React from 'react'
import EventTwo from './EventTwo'
import Map from './Map'
import State from './State'

const Condit = () => {
    const age = 17
    if(age > 18){
        return (
            <div>
                <Map/>  
            </div>
        )
    }else if(age == 18){
       return(
            <div>
                <EventTwo/>
            </div>
        )
    }else{
        return(
            <div>
                <State/>
            </div>
        )
    }
}

export default Condit
