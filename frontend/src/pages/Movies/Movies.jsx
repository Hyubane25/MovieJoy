import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import api from '../../services/api'
import './Movies.css'

/**
 * Movies Page Component
 * Displays a list of all available movies
 * Supports search and filtering functionality
 */
function Movies() {
  const [movies, setMovies] = useState([])
  const [loading, setLoading] = useState(true)
  const [searchTerm, setSearchTerm] = useState('')

  // Fetch all movies on component mount
  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await api.get('/movies')
        setMovies(response.data)
      } catch (error) {
        console.error('Error fetching movies:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchMovies()
  }, [])

  // Filter movies based on search term
  const filteredMovies = movies.filter((movie) =>
    movie.title.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div className="movies-page">
      <div className="container">
        <h1>All Movies</h1>

        <div className="search-bar">
          <input
            type="text"
            placeholder="Search movies..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        {loading ? (
          <div className="loading">Loading movies...</div>
        ) : (
          <div className="movies-grid">
            {filteredMovies.map((movie) => (
              <Link
                key={movie.id}
                to={`/movies/${movie.id}`}
                className="movie-card"
              >
                <img
                  src={movie.poster_url || '/placeholder.jpg'}
                  alt={movie.title}
                />
                <h3>{movie.title}</h3>
                <p>{movie.year}</p>
                <p className="rating">Rating: {movie.rating || 'N/A'}</p>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default Movies
