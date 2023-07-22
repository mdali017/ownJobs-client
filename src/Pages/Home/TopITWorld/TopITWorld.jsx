import React, { useEffect, useState } from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import CompanyCard from "../../../Shared/CompanyCard/CompanyCard";

const TopITWorld = () => {
  const [topCompanies, setCompanies] = useState([]);

  useEffect(() => {
    fetch("../../../../public/data/TopITWorld.json")
      .then((res) => res.json())
      .then((data) => setCompanies(data, 10));
  }, []);
  return (
    <div>
      <SectionTitle
        subHeading="Top IT Companies"
        subHeadingleft="In World Wide"
        Heading="Companies Information"
      ></SectionTitle>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10 mb-16">
        {topCompanies.map((item, index) => (
          <CompanyCard key={index} companies={item}></CompanyCard>
        ))}
      </div>
    </div>
  );
};

export default TopITWorld;
