const express = require('express')
const router = express.Router()
const movieController = require('../controllers/movieController')

/**
 * Movie Routes Module
 * Defines all API endpoints for movie-related operations
 * Routes HTTP requests to appropriate controller functions
 */

// GET /api/movies - Get all movies
router.get('/', movieController.getAllMovies)

// GET /api/movies/featured - Get featured movies
router.get('/featured', movieController.getFeaturedMovies)

// GET /api/movies/:id - Get a specific movie by ID
router.get('/:id', movieController.getMovieById)

// POST /api/movies - Create a new movie
router.post('/', movieController.createMovie)

// PUT /api/movies/:id - Update a movie by ID
router.put('/:id', movieController.updateMovie)

// DELETE /api/movies/:id - Delete a movie by ID
router.delete('/:id', movieController.deleteMovie)

module.exports = router
