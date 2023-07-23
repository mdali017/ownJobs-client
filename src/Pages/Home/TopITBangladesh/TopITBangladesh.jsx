import React, { useEffect, useState } from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import CompanyCard from "../../../Shared/CompanyCard/CompanyCard";
import useCompanies from "../../../hooks/useCompanies";

const TopITBangladesh = () => {
  const [companies] = useCompanies();
  const topITBangladesh = companies.filter(
    (item) => item.location_type === "Bangladesh"
  );

  return (
    <div>
      <SectionTitle
        subHeading="Top IT Companies"
        subHeadingleft="In Bangladesh"
        Heading="Companies Information"
      ></SectionTitle>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10 mb-16">
        {topITBangladesh.map((item, index) => (
          <CompanyCard key={index} companies={item}></CompanyCard>
        ))}
      </div>
    </div>
  );
};

export default TopITBangladesh;
