import React from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const JobCard = ({ jobs }) => {
  const navigate = useNavigate();
  // console.log(jobs);
  const { position, job_location, company_name, company_logo, category_name } =
    jobs;

  const handleApply = () => {
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "Job Apply Successfully",
      showConfirmButton: false,
      timer: 1500,
    });
    navigate("/");
  };
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <div className="card-body">
        <span className="card-title border rounded-full pl-2">
          {category_name}
        </span>
        <p className="mt-8 text-3xl font-semibold ">{position}</p>
        <div className="flex gap-4 mt-5">
          <div className="flex items-center gap-3">
            <span>
              <FaMapMarkerAlt></FaMapMarkerAlt>
            </span>
            <span>{job_location}</span>
          </div>
          <div className="flex items-center gap-3">
            <span>
              <FaMapMarkerAlt></FaMapMarkerAlt>
            </span>
          </div>
          <span>Remote</span>
        </div>
        <div className="flex justify-between items-center mt-9">
          <div className="flex justify-center items-center">
            <img src={company_logo} alt="" />
            <h4>{company_name}</h4>
          </div>
          <button onClick={handleApply} className="btn ">
            Apply Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default JobCard;
