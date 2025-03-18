import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

const API_URL = "https://dummyapi.online/api/movies";

function App() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get(API_URL)
      .then(response => {
        setMovies(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error("Error fetching movies:", error);
        setLoading(false);
      });
  }, []);

  return (
    <div className="app">
      <h1>🎬 Movie Database</h1>
      {loading ? <p>Loading movies...</p> : (
        <div className="movie-list">
          {movies.map(movie => (
            <div key={movie.id} className="movie-card">
              <h2>{movie.title}</h2>
              <p><strong>Director:</strong> {movie.director}</p>
              <p><strong>Year:</strong> {movie.year}</p>
              <p><strong>Genre:</strong> {movie.genre}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default App;

