import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'

/**
 * Header Component
 * Provides navigation bar for the application
 * Contains links to Home and Movies pages
 */
function Header() {
  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <Link to="/" className="logo">
            <h1>MovieJoy</h1>
          </Link>
          <nav className="nav">
            <Link to="/" className="nav-link">Home</Link>
            <Link to="/movies" className="nav-link">Movies</Link>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Header
