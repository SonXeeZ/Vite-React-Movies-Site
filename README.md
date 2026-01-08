# Movie Search App

A modern, responsive movie search application built with React and Vite.

## Features

- Real-time Search - Find movies instantly with debounced search
- Responsive Design - Works seamlessly on desktop and mobile
- Pagination - Browse through extensive movie collections
- Fast Performance - Built with Vite for optimal loading speeds
- Modern UI - Clean design with Tailwind CSS
- Movie Details - View ratings, release dates, and movie posters

## Tech Stack

- **Frontend**: React 18, Vite
- **Styling**: Tailwind CSS
- **API**: The Movie Database (TMDB)
- **Hooks**: Custom debouncing with react-use
- **State Management**: React Hooks (useState, useEffect)

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn
- TMDB API key (Get one at https://www.themoviedb.org/settings/api)

### Installation

1. Clone the repository
git clone https://github.com/yourusername/movie-search-app.git
cd movie-search-app

2. Install dependencies
npm install

3. Create environment file
cp .env.example .env

4. Add your TMDB API key to `.env`
VITE_TMDB_API_KEY=your_api_key_here

5. Start the development server
npm run dev

## Usage

1. **Search Movies**: Type in the search bar to find movies by title
2. **Browse Popular**: View trending movies when no search term is entered
3. **Navigate Pages**: Use pagination controls to browse through results
4. **View Details**: Each movie card displays title, rating, and poster


## API Integration

This app uses The Movie Database (TMDB) API v3. Key endpoints:
- `/discover/movie` - Popular movies
- `/search/movie` - Search functionality

## License

This project is licensed under the MIT License - see the LICENSE file for details.
