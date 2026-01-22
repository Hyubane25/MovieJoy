import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import api from '../../services/api'
import './Home.css'

/**
 * Home Page Component
 * Displays featured movies and welcome content
 * Fetches and displays popular movies from the backend API
 */
function Home() {
  const [featuredMovies, setFeaturedMovies] = useState([])
  const [loading, setLoading] = useState(true)

  // Fetch featured movies on component mount
  useEffect(() => {
    const fetchFeaturedMovies = async () => {
      try {
        const response = await api.get('/movies/featured')
        setFeaturedMovies(response.data)
      } catch (error) {
        console.error('Error fetching featured movies:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchFeaturedMovies()
  }, [])

  return (
    <div className="home">
      <div className="container">
        <section className="hero">
          <h1>Welcome to MovieJoy</h1>
          <p>Discover your next favorite movie</p>
        </section>

        <section className="featured-section">
          <h2>Featured Movies</h2>
          {loading ? (
            <div className="loading">Loading movies...</div>
          ) : (
            <div className="movies-grid">
              {featuredMovies.map((movie) => (
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
                </Link>
              ))}
            </div>
          )}
        </section>
      </div>
    </div>
  )
}

export default Home
