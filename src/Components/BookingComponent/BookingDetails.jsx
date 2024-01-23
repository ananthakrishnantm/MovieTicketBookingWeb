import React, { useState, useEffect } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import "./BookingDetails.css";

const BookingDetails = () => {
  const location = useLocation();
  const { state } = location;
  const initialFormData = state ? state.bookingData : {};
  const [formData, setFormData] = useState(initialFormData);
  const [ticketNumber, setTicketNumber] = useState("");
  const [selectedSeat, setSelectedSeat] = useState(""); // Initialize with an empty string
  const [movieTitle, setMovieTitle] = useState("");
  const navigation = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    // Fetch the movie title when the component mounts
    axios
      .get(`http://www.omdbapi.com/?i=${id}&apikey=9fb68997`)
      .then((response) => {
        setMovieTitle(response.data || "Unknown Movie");
      })
      .catch((error) => {
        console.error("Error fetching movie title:", error);
      });
  }, [id]);

  useEffect(() => {
    // Generate the ticket number when component mounts
    const randomTicketNumber = Math.floor(Math.random() * 1000000);
    setTicketNumber(randomTicketNumber);
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSeatChange = (e) => {
    setSelectedSeat(e.target.value);
  };

  const handleConfirmBooking = () => {
    // No need to set ticketNumber here, it's already generated
    navigation("/confirmation", {
      state: {
        bookingData: { ...formData, movieName: movieTitle },
        seatNumber: selectedSeat,
        ticketNumber,
        movieTitle,
      },
    });
  };

  return (
    <div className="container-main">
      <div className="booking-details-container">
        <h1>Booking Details</h1>
        <form className="booking-details-form">
          <label>
            Name:
            <input
              type="text"
              name="name"
              value={formData.name || ""}
              onChange={handleInputChange}
            />
          </label>
          <label>
            Email:
            <input
              type="email"
              name="email"
              value={formData.email || ""}
              onChange={handleInputChange}
            />
          </label>
          <label>
            Movie Name:
            <p>{movieTitle.Title}</p>
          </label>
          <label>
            Available Seats:
            <select
              name="seatNumber"
              value={selectedSeat}
              onChange={handleSeatChange}
            >
              <option value="">Select Seat</option>
              <option value="A1">A1</option>
              <option value="A2">A2</option>
              <option value="B1">B1</option>
              <option value="B2">B2</option>
              {/* Add more seat options as needed */}
            </select>
          </label>
          <button type="button" onClick={handleConfirmBooking}>
            Confirm Booking
          </button>
        </form>
      </div>
    </div>
  );
};

export default BookingDetails;
