import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import "./booking.css";

const Booking = () => {
  const [selectedMovie, setSelectedMovie] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const response = await axios.get(
          `http://www.omdbapi.com/?i=${id}&apikey=9fb68997`
        );
        setSelectedMovie(response.data);
      } catch (error) {
        console.error("Error fetching movie details:", error);
      }
    };

    fetchMovieDetails();
  }, [id]);

  if (!selectedMovie) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div className="card-container">
        <div className="cardMain">
          <div className="card-image">
            <img src={selectedMovie.Poster} alt={selectedMovie.Title} />
          </div>
          <div className="card-content">
            <h1>{selectedMovie.Title}</h1>
            <h2>Synopsis</h2>
            <p>{selectedMovie.Plot}</p>
          </div>
          <button
            className="card-button"
            onClick={() => navigate(`/booking-details/${id}`)}
          >
            Confirm Booking
          </button>
        </div>
      </div>
    </div>
  );
};

export default Booking;
