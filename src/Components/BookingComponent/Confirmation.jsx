import React from "react";
import { useLocation } from "react-router-dom";
import "./Confirmation.css";

const Confirmation = () => {
  const location = useLocation();
  const { state } = location;
  const { bookingData, seatNumber, ticketNumber, movieTitle } = state || {};

  return (
    <div className="confirmation-container">
      <div className="card-confirmation">
        <h2 className="heading-confirm">Your Ticket Details</h2>
        {bookingData && (
          <div>
            <h1 className="heading-confirm-movie">{movieTitle.Title}</h1>
            <div className="image-para-container">
              <div className="confirm-para-container">
                <p className="confrim-para">Name: {bookingData.name}</p>
                <p className="confrim-para">Email: {bookingData.email}</p>
                <p className="confrim-para">Selected Seat: {seatNumber}</p>
                <p className="confrim-para">Ticket Number: {ticketNumber}</p>
              </div>
              <div className="image-confirm-container">
                <img
                  className="heading-confirm-movie-image"
                  src={movieTitle.Poster}
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Confirmation;
