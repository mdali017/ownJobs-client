import React from "react";
import { Link } from "react-router-dom";

const CompanyCard = ({ companies }) => {
  // console.log(companies);
  const { _id, company_name, description, location, logo, website } = companies;
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure>
        <img src={logo} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{company_name}</h2>
        <p>{description}</p>
        <div className="card-actions justify-end">
          <Link to={`/allcompanies/${_id}`} className="btn btn-primary">
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CompanyCard;
