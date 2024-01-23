import React, { useState, useEffect } from "react";
import "./movieComponent.css";
import { Link } from "react-router-dom";

const MovieComponent = () => {
  const [movies, setMovies] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const apiKey = "9fb68997";
        const apiUrl = `http://www.omdbapi.com/?s=movie&apikey=${apiKey}`;
        const response = await fetch(apiUrl);
        const data = await response.json();

        // Reset movies to the new set of movies
        setMovies(data.Search || []);
      } catch (error) {
        console.error("Error fetching movie data:", error);
      }
    };

    fetchMovies();
  }, []); // Add an empty dependency array here

  return (
    <div id="movie-container">
      {movies.slice(0, 15).map((movie) => (
        <div key={movie.imdbID} className="card">
          <Link to={`/booking/${movie.imdbID}`}>
            <img src={movie.Poster} alt={movie.Title} />
            <button className="title">Book Now</button>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default MovieComponent;
