// SearchResults.js
import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import "./searchResults.css"; // Import the styles

const SearchResults = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const searchTerm = queryParams.get("query");
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSearchResults = () => {
      const apiKey = "9fb68997";
      const apiUrl = `http://www.omdbapi.com/?s=${searchTerm}&apikey=${apiKey}`;

      axios
        .get(apiUrl)
        .then((response) => {
          const data = response.data;

          if (data.Search) {
            setSearchResults(data.Search);
          } else {
            setSearchResults([]);
          }

          setLoading(false);
        })
        .catch((error) => {
          console.error("Error fetching search results:", error);
          setLoading(false);
        });
    };

    fetchSearchResults();
  }, [searchTerm]);

  return (
    <div>
      <h2>Search Results for: {searchTerm}</h2>
      <div className="search-results-container">
        {loading && <p>Loading...</p>}
        {!loading && searchResults.length === 0 && <p>No results found.</p>}
        {!loading &&
          searchResults.length > 0 &&
          searchResults.map((result) => (
            <div key={result.imdbID} className="search-card">
              <img src={result.Poster} alt={result.Title} />
              <h3>{result.Title}</h3>
              {/* Add additional information if needed */}
            </div>
          ))}
      </div>
    </div>
  );
};

export default SearchResults;
