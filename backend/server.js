const express = require('express')
const cors = require('cors')
const dotenv = require('dotenv')
const movieRoutes = require('./routes/movieRoutes')
const db = require('./config/database')

// Load environment variables from .env file
dotenv.config()

// Initialize Express application
const app = express()
const PORT = process.env.PORT || 5000

// Middleware configuration
// Enable CORS to allow frontend to communicate with backend
app.use(cors())
// Parse JSON request bodies
app.use(express.json())
// Parse URL-encoded request bodies
app.use(express.urlencoded({ extended: true }))

// Test database connection on server start
db.getConnection((err, connection) => {
  if (err) {
    console.error('Database connection error:', err)
  } else {
    console.log('MySQL Database connected successfully')
    connection.release()
  }
})

// API Routes
// All movie-related endpoints are handled by movieRoutes
app.use('/api/movies', movieRoutes)

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', message: 'MovieJoy API is running' })
})

// Root endpoint
app.get('/', (req, res) => {
  res.json({ message: 'Welcome to MovieJoy API' })
})

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack)
  res.status(500).json({ error: 'Something went wrong!' })
})

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})
