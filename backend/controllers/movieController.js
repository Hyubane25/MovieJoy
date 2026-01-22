const db = require('../config/database')

/**
 * Movie Controller Module
 * Handles all business logic for movie-related operations
 * Interacts with the database to perform CRUD operations
 */

/**
 * Get all movies from the database
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 */
const getAllMovies = async (req, res) => {
  try {
    const query = 'SELECT * FROM movies ORDER BY created_at DESC'
    const movies = await db.query(query)
    res.json(movies)
  } catch (error) {
    console.error('Error fetching movies:', error)
    res.status(500).json({ error: 'Failed to fetch movies' })
  }
}

/**
 * Get featured movies (movies marked as featured)
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 */
const getFeaturedMovies = async (req, res) => {
  try {
    const query = 'SELECT * FROM movies WHERE is_featured = 1 ORDER BY rating DESC LIMIT 10'
    const movies = await db.query(query)
    res.json(movies)
  } catch (error) {
    console.error('Error fetching featured movies:', error)
    res.status(500).json({ error: 'Failed to fetch featured movies' })
  }
}

/**
 * Get a specific movie by ID
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 */
const getMovieById = async (req, res) => {
  try {
    const { id } = req.params
    const query = 'SELECT * FROM movies WHERE id = ?'
    const movies = await db.query(query, [id])

    if (movies.length === 0) {
      return res.status(404).json({ error: 'Movie not found' })
    }

    res.json(movies[0])
  } catch (error) {
    console.error('Error fetching movie:', error)
    res.status(500).json({ error: 'Failed to fetch movie' })
  }
}

/**
 * Create a new movie
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 */
const createMovie = async (req, res) => {
  try {
    const { title, year, genre, director, description, rating, duration, poster_url, is_featured } = req.body

    // Validate required fields
    if (!title || !year) {
      return res.status(400).json({ error: 'Title and year are required' })
    }

    const query = `
      INSERT INTO movies (title, year, genre, director, description, rating, duration, poster_url, is_featured)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
    `
    const result = await db.query(query, [
      title,
      year,
      genre || null,
      director || null,
      description || null,
      rating || null,
      duration || null,
      poster_url || null,
      is_featured || 0
    ])

    res.status(201).json({ id: result.insertId, message: 'Movie created successfully' })
  } catch (error) {
    console.error('Error creating movie:', error)
    res.status(500).json({ error: 'Failed to create movie' })
  }
}

/**
 * Update an existing movie by ID
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 */
const updateMovie = async (req, res) => {
  try {
    const { id } = req.params
    const { title, year, genre, director, description, rating, duration, poster_url, is_featured } = req.body

    // Check if movie exists
    const checkQuery = 'SELECT * FROM movies WHERE id = ?'
    const existingMovie = await db.query(checkQuery, [id])

    if (existingMovie.length === 0) {
      return res.status(404).json({ error: 'Movie not found' })
    }

    const query = `
      UPDATE movies 
      SET title = ?, year = ?, genre = ?, director = ?, description = ?, 
          rating = ?, duration = ?, poster_url = ?, is_featured = ?
      WHERE id = ?
    `
    await db.query(query, [
      title || existingMovie[0].title,
      year || existingMovie[0].year,
      genre !== undefined ? genre : existingMovie[0].genre,
      director !== undefined ? director : existingMovie[0].director,
      description !== undefined ? description : existingMovie[0].description,
      rating !== undefined ? rating : existingMovie[0].rating,
      duration !== undefined ? duration : existingMovie[0].duration,
      poster_url !== undefined ? poster_url : existingMovie[0].poster_url,
      is_featured !== undefined ? is_featured : existingMovie[0].is_featured,
      id
    ])

    res.json({ message: 'Movie updated successfully' })
  } catch (error) {
    console.error('Error updating movie:', error)
    res.status(500).json({ error: 'Failed to update movie' })
  }
}

/**
 * Delete a movie by ID
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 */
const deleteMovie = async (req, res) => {
  try {
    const { id } = req.params

    // Check if movie exists
    const checkQuery = 'SELECT * FROM movies WHERE id = ?'
    const existingMovie = await db.query(checkQuery, [id])

    if (existingMovie.length === 0) {
      return res.status(404).json({ error: 'Movie not found' })
    }

    const query = 'DELETE FROM movies WHERE id = ?'
    await db.query(query, [id])

    res.json({ message: 'Movie deleted successfully' })
  } catch (error) {
    console.error('Error deleting movie:', error)
    res.status(500).json({ error: 'Failed to delete movie' })
  }
}

module.exports = {
  getAllMovies,
  getFeaturedMovies,
  getMovieById,
  createMovie,
  updateMovie,
  deleteMovie
}
