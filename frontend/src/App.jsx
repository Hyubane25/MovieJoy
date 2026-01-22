import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header/Header'
import Home from './pages/Home/Home'
import Movies from './pages/Movies/Movies'
import MovieDetail from './pages/MovieDetail/MovieDetail'
import './App.css'

/**
 * Main App Component
 * Sets up routing for the entire application
 * Wraps all pages with the Header component for consistent navigation
 */
function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:id" element={<MovieDetail />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
