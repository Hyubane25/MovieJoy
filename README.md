# MovieJoy

A modern web application for discovering and managing movies, built with React, Node.js, and MySQL.

## 🎬 Features

- Browse and search movies
- View detailed movie information
- Featured movies section
- Responsive design
- RESTful API backend

## 🛠️ Technology Stack

### Frontend
- **React** - UI library
- **HTML/CSS/JavaScript** - Core web technologies
- **Vite** - Build tool and development server
- **React Router** - Client-side routing
- **Axios** - HTTP client for API requests

### Backend
- **Node.js** - JavaScript runtime
- **Express** - Web framework
- **MySQL2** - MySQL database driver

### Database
- **MySQL** - Relational database management system

## 📁 Project Structure

```
MovieJoy/
├── frontend/              # React frontend application
│   ├── src/
│   │   ├── components/   # Reusable React components
│   │   ├── pages/        # Page components
│   │   ├── services/     # API service layer
│   │   ├── App.jsx       # Main app component
│   │   └── main.jsx      # Entry point
│   ├── package.json
│   └── vite.config.js
├── backend/              # Node.js backend server
│   ├── config/          # Configuration files
│   ├── controllers/     # Request handlers
│   ├── routes/          # API route definitions
│   ├── server.js        # Server entry point
│   └── package.json
├── database/            # Database scripts
│   ├── schema.sql      # Database schema
│   └── README.md       # Database setup guide
└── README.md           # This file
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- MySQL Server (v8.0 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd MovieJoy
   ```

2. **Set up the database**
   ```bash
   # Create database and tables
   mysql -u root -p < database/schema.sql
   ```

3. **Configure backend environment**
   ```bash
   cd backend
   cp env.example .env
   # Edit .env with your database credentials
   ```

4. **Install backend dependencies**
   ```bash
   cd backend
   npm install
   ```

5. **Install frontend dependencies**
   ```bash
   cd ../frontend
   npm install
   ```

### Running the Application

1. **Start the backend server**
   ```bash
   cd backend
   npm run dev
   # Server runs on http://localhost:5000
   ```

2. **Start the frontend development server**
   ```bash
   cd frontend
   npm run dev
   # Frontend runs on http://localhost:3000
   ```

3. **Open your browser**
   Navigate to `http://localhost:3000`

## 📡 API Endpoints

### Movies

- `GET /api/movies` - Get all movies
- `GET /api/movies/featured` - Get featured movies
- `GET /api/movies/:id` - Get movie by ID
- `POST /api/movies` - Create a new movie
- `PUT /api/movies/:id` - Update a movie
- `DELETE /api/movies/:id` - Delete a movie

### Health Check

- `GET /api/health` - Check API status

## 🗄️ Database Schema

The `movies` table contains the following fields:
- `id` - Primary key
- `title` - Movie title (required)
- `year` - Release year (required)
- `genre` - Movie genre
- `director` - Director name
- `description` - Movie description
- `rating` - Movie rating (0-10)
- `duration` - Duration in minutes
- `poster_url` - Poster image URL
- `is_featured` - Featured flag
- `created_at` - Creation timestamp
- `updated_at` - Last update timestamp

## 🎨 Component Structure

### Frontend Components

- **Header** - Navigation bar component
- **Home** - Landing page with featured movies
- **Movies** - Movie listing page with search
- **MovieDetail** - Individual movie detail page

### Backend Structure

- **Routes** - Define API endpoints
- **Controllers** - Handle business logic
- **Database Config** - MySQL connection management

## 📝 Development

### Backend Development
```bash
cd backend
npm run dev  # Uses nodemon for auto-reload
```

### Frontend Development
```bash
cd frontend
npm run dev  # Vite development server with HMR
```

### Building for Production

**Frontend:**
```bash
cd frontend
npm run build
```

**Backend:**
```bash
cd backend
npm start
```

## 🔧 Configuration

### Environment Variables

Create a `.env` file in the `backend` directory:

```env
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=your_password
DB_NAME=moviejoy
PORT=5000
NODE_ENV=development
```

## 📄 License

This project is open source and available under the MIT License.

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

## 👤 Author

Janrey Ubane
