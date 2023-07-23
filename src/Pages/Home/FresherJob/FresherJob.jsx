import React, { useEffect, useState } from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import JobCard from "../../../Shared/JobCard/JobCard";
import { FaArrowRight } from "react-icons/fa";
import useAllJobs from "../../../hooks/useAllJobs";
import { useNavigate } from "react-router-dom";

const FresherJob = () => {
  const navigate = useNavigate();
  const [allJobs] = useAllJobs();
  const fresherJob = allJobs.filter((item) => item.job_type === "Fresher");

  const handleNavigate = () => {
    navigate("/alljobs");
  };

  return (
    <div>
      <SectionTitle
        subHeading="Categories work"
        subHeadingleft="wating for you"
        Heading="Fresher Jobs"
      ></SectionTitle>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10 mb-16">
        {fresherJob.map((item, index) => (
          <JobCard key={index} jobs={item}></JobCard>
        ))}
      </div>
      <div className="text-center">
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

export default FresherJob;
