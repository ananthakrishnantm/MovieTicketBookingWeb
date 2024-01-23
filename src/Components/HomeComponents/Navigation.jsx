// Navigation.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./navigation.css";

const Navigation = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const handleSearch = () => {
    // Redirect to the SearchResults page with the search term as a query parameter
    navigate(`/search-results?query=${searchTerm}`);
  };
  const backhome = () => {
    navigate(`/`);
  };
  return (
    <div className="navigation-container">
      <div className="navigation-heading">
        <h1 onClick={backhome} className="navigation-heading">
          Home
        </h1>
      </div>
      <div className="navigation">
        <input
          className="navigation-input"
          type="text"
          placeholder="Search movies..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button className="navigation-button" onClick={handleSearch}>
          Search
        </button>
      </div>
    </div>
  );
};

export default Navigation;
