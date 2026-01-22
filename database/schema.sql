-- MovieJoy Database Schema
-- Creates the database and movies table structure

-- Create database if it doesn't exist
CREATE DATABASE IF NOT EXISTS moviejoy;
USE moviejoy;

-- Create movies table
-- Stores all movie information including title, year, genre, director, etc.
CREATE TABLE IF NOT EXISTS movies (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    year INT NOT NULL,
    genre VARCHAR(100),
    director VARCHAR(255),
    description TEXT,
    rating DECIMAL(3, 1),
    duration INT,
    poster_url VARCHAR(500),
    is_featured BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    INDEX idx_title (title),
    INDEX idx_year (year),
    INDEX idx_genre (genre),
    INDEX idx_rating (rating),
    INDEX idx_featured (is_featured)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Insert sample data for testing
INSERT INTO movies (title, year, genre, director, description, rating, duration, poster_url, is_featured) VALUES
('The Shawshank Redemption', 1994, 'Drama', 'Frank Darabont', 'Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.', 9.3, 142, 'https://example.com/posters/shawshank.jpg', 1),
('The Godfather', 1972, 'Crime', 'Francis Ford Coppola', 'The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.', 9.2, 175, 'https://example.com/posters/godfather.jpg', 1),
('The Dark Knight', 2008, 'Action', 'Christopher Nolan', 'When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.', 9.0, 152, 'https://example.com/posters/darkknight.jpg', 1),
('Pulp Fiction', 1994, 'Crime', 'Quentin Tarantino', 'The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.', 8.9, 154, 'https://example.com/posters/pulpfiction.jpg', 0),
('Forrest Gump', 1994, 'Drama', 'Robert Zemeckis', 'The presidencies of Kennedy and Johnson, the Vietnam War, the Watergate scandal and other historical events unfold from the perspective of an Alabama man with an IQ of 75.', 8.8, 142, 'https://example.com/posters/forrestgump.jpg', 0);
