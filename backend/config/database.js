const mysql = require('mysql2')

/**
 * Database Configuration Module
 * Creates and exports MySQL connection pool for efficient database operations
 * Uses environment variables for secure credential management
 */
const pool = mysql.createPool({
  host: process.env.DB_HOST || 'localhost',
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || '@Password_123',
  database: process.env.DB_NAME || 'moviejoy',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
})

// Promisify the pool for async/await support
const promisePool = pool.promise()

/**
 * Get a connection from the pool
 * @returns {Promise} Promise that resolves to a connection
 */
const getConnection = () => {
  return promisePool.getConnection()
}

/**
 * Execute a query with automatic connection management
 * @param {string} query - SQL query string
 * @param {Array} params - Query parameters
 * @returns {Promise} Promise that resolves to query results
 */
const query = async (query, params) => {
  try {
    const [results] = await promisePool.execute(query, params)
    return results
  } catch (error) {
    console.error('Database query error:', error)
    throw error
  }
}

module.exports = {
  pool,
  promisePool,
  getConnection,
  query
}
