import React, { useState, useEffect } from 'react'
import movieData from '../data/movie'
import '../css/movie.css'

const Movie = () => {
  const [movies, setMovies] = useState(movieData)

  const remove = (id) => {
    const newData = movies.filter(movie => movie.id !== id)
    setMovies(newData)
  }

  const category = (category) => {
    const newCat = movies.filter(movie => movie.category == category)
    setMovies(newCat)
  }

 const render = movies.map((movie, idx) => {
    return(
      <div key={idx}>
      <div className='each-movie-container'>
        <img src={movie.url} alt="movie-image" />
          <p>Title : {movie.title}</p>
          <p>Genre : {movie.genre}</p>
          <p>Category : {movie.category}</p>
          <button className='each-movie-button' onClick={()=>remove(movie.id)}>X</button>
        </div>
      </div>
    )
  })

  const all = () => {
    setMovies(movieData)
  }

  return (
    <div className='overall-movie'>
          <h1 style={{ textAlign: 'center', margin: '1%'}}>{movies.length} Movies Available</h1>
          <div className='movie-cat'>
            <div>
              <ul className='movie-cat-list'>
                <li onClick={()=>category("Hollywood")}>Hollywood</li>
                <li onClick={()=>category("Nollywood")}>Nollywood</li>
                <li onClick={()=>category("Bollywood")}>Bollywood</li>
                <li onClick={()=>category("K. drama")}>K.Dramas</li>
              </ul>
            </div>
            <div>
              <ul className='movie-cat-list'>
                <li onClick={all}>All&nbsp;movies</li>
              </ul>
            </div>
            <div>
              <ul className='movie-cat-list'>
                <li>Action</li>
                <li>Action</li>
                <li>Mystery</li>
                <li>Thriller</li>
                <li>Romance</li>
              </ul>
            </div>
          </div>
          <div className='movie-container'>
            {render}
          </div>
    </div>
  )
}

export default Movie
