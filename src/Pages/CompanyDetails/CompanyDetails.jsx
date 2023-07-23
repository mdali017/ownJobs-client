import React from "react";
import { FaArrowLeft } from "react-icons/fa";
import { useLoaderData, useNavigate } from "react-router-dom";
import SectionTitle from "../../components/SectionTitle/SectionTitle";

const CompanyDetails = () => {
  const companyDetails = useLoaderData();
  const navigate = useNavigate();
  console.log(companyDetails, 6);
  const {
    company_name,
    contact_email,
    description,
    employee_count,
    founded_year,
    linkedin_profile,
    location,
    location_type,
    logo,
    phone,
    services,
    website,
  } = companyDetails;
  const handleNavigate = () => {
    navigate("/");
  };
  return (
    <div>
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
            <h1 className="mb-5 text-5xl font-bold">Company Details</h1>
            <p className="mb-5">
              FindJob offers a user-friendly interface to browse, search, and
              apply for the perfect job match. Join us today and take the next
              step towards a fulfilling and rewarding career journey!
            </p>
            {/* <button onClick={handleNavigate} className="btn btn-primary">
              Get Started
            </button> */}
          </div>
        </div>
      </div>
      <SectionTitle
        className="absolute"
        subHeading="Discover Company"
        subHeadingleft="In World Wide"
        Heading="Details"
      ></SectionTitle>
      {/* Company Section */}
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="w-[40%] flex justify-center items-center">
            <img src={logo} className=" w-[70%]  rounded-lg shadow-2xl" />
          </div>
          <div className="w-[50%] mt-20">
            <h1 className="text-5xl font-bold">{company_name}</h1>
            <p className="py-6">{description}</p>
            <div>
              <span className="mr-40">
                <span className="text-xl font-medium">Founded Year</span> :
                {founded_year}
              </span>
              <span>
                <span className="text-xl font-medium">Employee</span> :
                {employee_count}
              </span>
            </div>
            <div>
              <span className="mr-16">
                <span className="text-xl font-medium">Location</span>:{location}
              </span>
              <span>
                <span className="text-xl font-medium">Country</span>:
                {location_type}
              </span>
            </div>
            <div>
              <h1 className="text-2xl font-bold mt-10 ">Services: </h1>
              <div className="mb-7 mt-2">
                <h5>1. {services[0]}</h5>
                <h5>2. {services[1]}</h5>
                <h5>3. {services[2]}</h5>
              </div>
            </div>
            <div className="mb-10">
              <h1 className="text-2xl font-bold  ">Contact Information: </h1>
              <h4>
                <span className="text-[120x] font-medium">Email</span>:{" "}
                {contact_email}
              </h4>
              <h4>
                <span className="text-[120x] font-medium">Phone</span>: {phone}
              </h4>
              <h4>
                <span className="text-[120x] font-medium">Website</span>:{" "}
                {website}
              </h4>
              <h4>
                <span className="text-[120x] font-medium">Linkedin</span>:{" "}
                {linkedin_profile}
              </h4>
            </div>
            <button onClick={handleNavigate} className="btn btn-primary">
              <FaArrowLeft></FaArrowLeft> Back To Home
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyDetails;
