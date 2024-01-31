import React, { useState, useEffect } from 'react'

const User = () => {
    const [users, setUsers] = useState([])
    
        useEffect(()=>{
            dataFetch(10)
        }, [])
    
    const dataFetch = async (n) => {
        const dataUrl = await fetch(`https://randomuser.me/api/?results=${n}`)
        const data = await dataUrl.json()
        setUsers(data.results)
    }

    const render = users.map((user, idx) => {
        return(
            <div key={idx}>
                <div style={{ margin: '3%'}}>
                    <img src={user.picture.large} alt="user-image" />
                    <p>Gender: {user.name.title} {user.name.first} {user.name.last}</p>
                    <p>Gender: {user.dob.age}</p>
                    <p>Gender: {user.gender}</p>
                    <p>Address: {user.location.street.number} {user.location.street.name} {user.location.city} {user.location.country} {user.location.country}</p>
                    <p>Phone: {user.phone}</p>
                </div>
            </div>
        )
    })
  return (
    <div>
        <div style={{ textAlign: 'center' }}>
            <h1>APIs fetch</h1>
            {render}
        </div>
    </div>
  )
}

export default User
