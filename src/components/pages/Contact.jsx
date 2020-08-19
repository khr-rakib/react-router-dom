import React from "react";

const Contact = () => {
  return (
    <div className="container">
      <div className="row mt-5 pt-5">
        <div className="col-md-12  shadow p-5">
          <h2>Contact Us </h2>
          <form className="mt-4">
            <div className="form-group">
              <input
                type="text"
                name="name"
                placeholder="enter your name"
                className="form-control"
              />
            </div>

            <div className="form-group">
              <input
                type="email"
                name="email"
                placeholder="enter your email"
                className="form-control"
              />
            </div>

            <div className="form-group">
              <textarea
                name="message"
                placeholder="enter your message"
                className="form-control"
                rows="5"
              ></textarea>
            </div>
            <button className="btn btn-info btn-block ">Send</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
