import React from "react";

const SectionTitle = ({ subHeading, subHeadingleft, Heading }) => {
  return (
    <div className="text-center mt-32">
      {/* <h4 className="text-xl">
        Categories work <span className="text-green-400">wating for you</span>
      </h4> */}
      <h4 className="text-xl">
        {subHeading} <span className="text-green-400">{subHeadingleft}</span>
      </h4>
      {/* <h2 className="text-4xl font-bold  mb-16">Fresher Jobs</h2> */}
      <h2 className="text-4xl font-bold  mb-16">{Heading}</h2>
    </div>
  );
};

export default SectionTitle;
