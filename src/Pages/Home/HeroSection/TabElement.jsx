import React from "react";
import { useNavigate } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

const TabElement = () => {
  const navigate = useNavigate();
  const searchButton = (
    <>
      <div className="indicator">
        <span className="indicator-item badge badge-secondary">new</span>
        <button className="btn join-item">Search</button>
      </div>
    </>
  );
  const handleNavigate = () => {
    navigate("/alljobs");
    console.log("button click");
  };
  return (
    <Tabs>
      <TabList>
        <Tab>Job Seeker</Tab>
        <Tab>Job poster</Tab>
      </TabList>

      <TabPanel>
        <div className="join bg-red-300 p-10">
          <div>
            <div>
              <input
                className="input input-bordered join-item "
                placeholder="eg Web Developer"
              />
              <input
                className="input input-bordered join-item "
                placeholder="Location"
              />
            </div>
          </div>
          <select className="select select-bordered join-item">
            <option disabled selected>
              Filter
            </option>
            <option>On-Site</option>
            <option>Hybrid</option>
            <option>Remote</option>
          </select>
          <div onClick={handleNavigate}>{searchButton}</div>
        </div>
      </TabPanel>
      <TabPanel>
        <div className="join bg-red-300 p-10">
          <div>
            <div>
              <input
                className="input input-bordered join-item "
                placeholder="eg John Doe"
              />
              <input
                className="input input-bordered join-item "
                placeholder="Location"
              />
            </div>
          </div>
          <select className="select select-bordered join-item">
            <option disabled selected>
              Filter
            </option>
            <option>On-Site</option>
            <option>Hybrid</option>
            <option>Remote</option>
          </select>
          <div onClick={handleNavigate}>{searchButton}</div>
        </div>
      </TabPanel>
    </Tabs>
  );
};

export default TabElement;
