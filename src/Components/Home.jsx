import React from "react";
import ImageSlider from "./HomeComponents/ImageSlider";
import "./home.css";
import Buttons from "./HomeComponents/Buttons";
import MovieComponent from "./HomeComponents/MovieComponent";
import Navigation from "./HomeComponents/Navigation";

function Home() {
  return (
    <div>
      <Buttons />
      <ImageSlider />
      <MovieComponent />
    </div>
  );
}

export default Home;
