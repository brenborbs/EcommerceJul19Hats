import React from "react";

import HomeSlider from "../../components/home-slider/home-slider.component";
import Directory from "../../components/directory/directory.component";

// import { HomePageContainer } from "./homepage.styles";

const HomePage = () => (
  <div className="homepage-container">
    <HomeSlider />
    <Directory />
  </div>
);

export default HomePage;
