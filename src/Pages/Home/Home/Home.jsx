import React from "react";
import HeroSection from "../HeroSection/HeroSection";
import FresherJob from "../FresherJob/FresherJob";
import ExperienceJob from "../ExperienceJob/ExperienceJob";
import TopITBangladesh from "../TopITBangladesh/TopITBangladesh";
import TopITWorld from "../TopITWorld/TopITWorld";
import Blog from "../Blogs/Blog";

const Home = () => {
  return (
    <div>
      <HeroSection></HeroSection>
      <FresherJob></FresherJob>
      <ExperienceJob></ExperienceJob>
      <TopITBangladesh></TopITBangladesh>
      <TopITWorld></TopITWorld>
      <Blog></Blog>
    </div>
  );
};

export default Home;
