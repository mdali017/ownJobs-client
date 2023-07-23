import React from "react";
import useAllJobs from "../../hooks/useAllJobs";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import JobCard from "../../Shared/JobCard/JobCard";
import { useNavigate } from "react-router-dom";

const AllJobs = () => {
  const [allJobs] = useAllJobs();
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/");
  };

  return (
    <div>
      {/* <SectionTitle
        subHeading="Categories work"
        subHeadingleft="wating for you"
        Heading="All Jobs"
      ></SectionTitle> */}
      <div
        className="hero min-h-[60vh] mb-20"
        style={{
          backgroundImage:
            "url(https://images.pexels.com/photos/5699479/pexels-photo-5699479.jpeg?auto=compress&cs=tinysrgb&w=600)",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Find Jobs</h1>
            <p className="mb-5">
              FindJob offers a user-friendly interface to browse, search, and
              apply for the perfect job match. Join us today and take the next
              step towards a fulfilling and rewarding career journey!
            </p>
            <button onClick={handleNavigate} className="btn btn-primary">
              Get Started
            </button>
          </div>
        </div>
      </div>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10 mb-16">
        {allJobs.map((item, index) => (
          <JobCard key={index} jobs={item}></JobCard>
        ))}
      </div>
    </div>
  );
};

export default AllJobs;
