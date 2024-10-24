import React from "react";
import HeroPage from "../components/main-page/heroPage";
import Yogas from "../components/yoga-poses/Yogas";
import Gyms from "./gym-poses/Gyms";

const HomePage = () => {
  return (
    <div>
      <HeroPage />
      <Yogas />
      <Gyms />
    </div>
  );
};

export default HomePage;
