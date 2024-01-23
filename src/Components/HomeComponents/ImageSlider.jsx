import { Card, Paper } from "@mui/material";
import React, { useState } from "react";
import { Button, Typography } from "@mui/material";
import "./ImageSlider.css";

const images = [
  "https://lewtonbus.net/wp-content/uploads/2017/12/PP3_Clip.jpg",
  "https://cdn.europosters.eu/image/hp/75998.jpg",
];
function ImageSlider() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handlePrevClick = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : images.length - 1
    );
  };

  const handleNextClick = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex < images.length - 1 ? prevIndex + 1 : 0
    );
  };

  return (
    <Card elevation={3} className="image-carousel-container">
      <img
        src={images[currentImageIndex]}
        alt={`Slide ${currentImageIndex + 1}`}
        className="carousel-image"
      />
      <div className="carousel-info">
        <div className="carousel-navigation">
          <div>
            <button
              className="right-button"
              onClick={handlePrevClick}
            >{``}</button>
          </div>
          <div>
            <button
              className="left-button"
              onClick={handleNextClick}
            >{``}</button>
          </div>
        </div>
      </div>
    </Card>
  );
}

export default ImageSlider;
