import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import api from '../../services/api'
import './MovieDetail.css'

/**
 * Movie Detail Page Component
 * Displays detailed information about a specific movie
 * Fetches movie data by ID from the backend API
 */
function MovieDetail() {
  const { id } = useParams()
  const navigate = useNavigate()
  const [movie, setMovie] = useState(null)
  const [loading, setLoading] = useState(true)
  
  // Fetch movie details on component mount
  useEffect(() => {
    const fetchMovieDetail = async () => {
      try {
        const response = await api.get(`/movies/${id}`)
        setMovie(response.data)
      } catch (error) {
        console.error('Error fetching movie details:', error)
        navigate('/movies')
      } finally {
        setLoading(false)
      }
    }

    fetchMovieDetail()
  }, [id, navigate])

  if (loading) {
    return (
      <div className="movie-detail">
        <div className="container">
          <div className="loading">Loading movie details...</div>
        </div>
      </div>
    )
  }

  if (!movie) {
    return (
      <div className="movie-detail">
        <div className="container">
          <div className="error">Movie not found</div>
        </div>
      </div>
    )
  }

  return (
    <div className="movie-detail">
      <div className="container">
        <button className="back-button" onClick={() => navigate(-1)}>
          ← Back
        </button>

        <div className="movie-detail-content">
          <div className="movie-poster">
            <img
              src={movie.poster_url || '/placeholder.jpg'}
              alt={movie.title}
            />
          </div>

          <div className="movie-info">
            <h1>{movie.title}</h1>
            <div className="movie-meta">
              <span>Year: {movie.year}</span>
              <span>Rating: {movie.rating || 'N/A'}</span>
              <span>Genre: {movie.genre || 'N/A'}</span>
            </div>
            <div className="movie-description">
              <h2>Description</h2>
              <p>{movie.description || 'No description available.'}</p>
            </div>
            <div className="movie-details">
              <p><strong>Director:</strong> {movie.director || 'N/A'}</p>
              <p><strong>Duration:</strong> {movie.duration || 'N/A'} minutes</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MovieDetail
