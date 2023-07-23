import React from "react";
import TabElement from "./TabElement";

const HeroSection = () => {
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage:
          "url(https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=600)",
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-screen-lg text-left">
          <h1 className="mb-5 text-5xl font-bold">Find Your Own Jobs</h1>
          <p className="mb-5 w-[700px]">
            Welcome to FindJob - Your Gateway to Exciting Opportunities!
            Discover your dream job with ease and efficiency on our platform. We
            connect job seekers like you with a wide range of career options
            across diverse industries.
          </p>
          <TabElement></TabElement>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
