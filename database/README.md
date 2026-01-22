# Database Setup Instructions

## Prerequisites
- MySQL Server installed and running
- MySQL client or command line access

## Setup Steps

1. **Create the database and tables:**
   ```bash
   mysql -u root -p < schema.sql
   ```

2. **Or manually run the SQL commands:**
   - Open MySQL command line or MySQL Workbench
   - Execute the contents of `schema.sql`

3. **Update backend configuration:**
   - Copy `backend/.env.example` to `backend/.env`
   - Update database credentials in `backend/.env`

## Database Structure

### movies table
- `id` - Primary key, auto-increment
- `title` - Movie title (required)
- `year` - Release year (required)
- `genre` - Movie genre
- `director` - Director name
- `description` - Movie description
- `rating` - Movie rating (0-10)
- `duration` - Movie duration in minutes
- `poster_url` - URL to movie poster image
- `is_featured` - Boolean flag for featured movies
- `created_at` - Timestamp of creation
- `updated_at` - Timestamp of last update
