import React from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const ContactForm = () => {
  const navigate = useNavigate();
  const handleSendMe = () => {
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "Your work has been saved",
      showConfirmButton: false,
      timer: 1500,
    });
    navigate("/");
  };
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
        <div className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              placeholder="Name"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              placeholder="Email"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Message</span>
            </label>
            <textarea
              className="textarea textarea-accent"
              placeholder="Message"
            ></textarea>
          </div>

          <div className="form-control mt-6">
            <button onClick={handleSendMe} className="btn btn-primary">
              Send Me
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
