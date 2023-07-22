import React from "react";

const CompanyCard = ({ companies }) => {
  console.log(companies);
  const { company_name, description, location, logo, website } = companies;
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure>
        <img src={logo} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{company_name}</h2>
        <p>{description}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">View Details</button>
        </div>
      </div>
    </div>
  );
};

export default CompanyCard;
