import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import SearchResults from "./Components/HomeComponents/SearchResults";
import Booking from "./Components/Booking";
import BookingDetails from "./Components/BookingComponent/BookingDetails";
import Confirmation from "./Components/BookingComponent/Confirmation";

function App() {
  return (
    <Routes>
      <Route path="/MovieTicketBookingWeb" element={<Home />} />
      <Route path="/search-results" element={<SearchResults />} />
      <Route path="/booking/:id" element={<Booking />} />
      <Route path="/booking-details/:id" element={<BookingDetails />} />
      <Route path="/confirmation" element={<Confirmation />} />
    </Routes>
  );
}

export default App;
