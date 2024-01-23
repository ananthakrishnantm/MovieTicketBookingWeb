import React from "react";
import "./buttons.css";

function Buttons() {
  return (
    <div className="home-button-container">
      <button className="home-button">Lates Movies</button>
      <button className="home-button">Upcoming Movies</button>
      <button className="home-button">Nearby Events</button>
    </div>
  );
}

export default Buttons;
