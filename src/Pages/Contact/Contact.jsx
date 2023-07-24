import React from "react";
import { useNavigate } from "react-router-dom";
import ContactForm from "./ContactForm";

const Contact = () => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/");
  };

  return (
    <div>
      {/* Hero Section For About Page */}
      <div
        className="hero min-h-[75vh] mb-20"
        style={{
          backgroundImage:
            "url(https://images.pexels.com/photos/5699479/pexels-photo-5699479.jpeg?auto=compress&cs=tinysrgb&w=600)",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Contact </h1>
            <p className="mb-5">
              FindJob offers a user-friendly interface to browse, search, and
              apply for the perfect job match. Join us today and take the next
              step towards a fulfilling and rewarding career journey!
            </p>
            <button onClick={handleNavigate} className="btn btn-primary">
              Get Started
            </button>
          </div>
        </div>
      </div>
      {/* Section 1 */}
      <div className="hero min-h-screen bg-base-400">
        <div className="hero-content w-full flex-col lg:flex-row">
          <div className="w-[50%]">
            <ContactForm></ContactForm>
          </div>
          <div className="w-[50%]">
            <h1 className="text-5xl font-bold">Md. Mohabbat Ali</h1>
            <p className="py-6">
              I am a skilled MERN stack developer with expertise in building
              dynamic and responsive web applications. With a strong foundation
              in JavaScript and proficiency in the MERN (MongoDB, Express.js,
              React.js, Node.js) stack, I have a deep understanding of the full
              web development process.
            </p>
            <div className="mb-10">
              <h1 className="text-2xl font-bold  ">Contact Information: </h1>
              <h4>
                <span className="text-[120x] font-medium">Email</span>:
                mohabbatalit8@gmail.com
              </h4>
              <h4>
                <span className="text-[120x] font-medium">Phone</span>: +880
                1717480093
              </h4>
              <h4>
                <span className="text-[120x] font-medium">Website</span>:
                https://mohabbat-ali.netlify.app/
              </h4>
              <h4>
                <span className="text-[120x] font-medium">Linkedin</span>:
                https://www.linkedin.com/in/md-mohabbat-ali-052b31237/
              </h4>
            </div>
            <button className="btn btn-primary">Contact Me</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
