import React from "react";
import HeroSection from "../HeroSection/HeroSection";
import FresherJob from "../FresherJob/FresherJob";
import ExperienceJob from "../ExperienceJob/ExperienceJob";

const Home = () => {
  return (
    <div>
      <HeroSection></HeroSection>
      <FresherJob></FresherJob>
      <ExperienceJob></ExperienceJob>
    </div>
  );
};

export default Home;
