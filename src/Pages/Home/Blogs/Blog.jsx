import React from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";

const Blog = () => {
  return (
    <>
      <SectionTitle
        subHeading="Some Interview Question"
        subHeadingleft=" In MERN Stack Related"
        Heading="InterView Questions"
      ></SectionTitle>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
          <figure>
            <img
              className="w-80"
              src="https://i.ibb.co/ZBCd1PR/HTML-and-CSS.jpg"
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              HTML And CSS Related Interview Questions
            </h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Questions</button>
            </div>
          </div>
        </div>
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
          <figure>
            <img
              src="https://i.ibb.co/52Dc0kr/React-and-Express.jpg"
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              React JS And Express JS Related Interview Questions
            </h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Questions</button>
            </div>
          </div>
        </div>
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
          <figure>
            <img
              src="https://i.ibb.co/cybVFjz/Mongodb-and-Node-JS.png"
              alt="Node and MongoDB"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              Node JS And MongoDB Related Interview Questions
            </h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Questions</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Blog;
