import React, { useEffect, useState } from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import JobCard from "../../../Shared/JobCard/JobCard";
import { FaArrowRight } from "react-icons/fa";
import useAllJobs from "../../../hooks/useAllJobs";
import { useNavigate } from "react-router-dom";

const ExperienceJob = () => {
  const navigate = useNavigate();
  const [allJobs] = useAllJobs();
  const experienceJob = allJobs.filter(
    (item) => item.job_type === "Experience"
  );

  const handleNavigate = () => {
    navigate("/alljobs");
  };
  return (
    <div>
      <SectionTitle
        subHeading="Discover jobs"
        subHeadingleft="for you"
        Heading="Experience Job"
      ></SectionTitle>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10 mb-16">
        {experienceJob.map((item, index) => (
          <JobCard key={index} jobs={item}></JobCard>
        ))}
      </div>
      <div className="text-center mt-10 mb-10">
        <button
          onClick={handleNavigate}
          className="btn btn-outline btn-warning   "
        >
          See More <FaArrowRight></FaArrowRight>
        </button>
      </div>
    </div>
  );
};

export default ExperienceJob;
