import React from "react";

const Contact = ({ setPage }) => {
  return (
    <div className="w-full pb-20 opacity-0 fade-slide-up"
      style={{ animationDelay: "1.1s", animationFillMode: "forwards" }}>
      <div id="contact" className="container p-5 space-y-2">
        <h1 className="text-2xl text font-semibold">
          Interested in any of these services?
        </h1>
        <p className="text-light">
          Don’t hesitate to reach out! I'm here to help you with tailored
          solutions that fit your needs. Feel free to{" "}
          <span
            onClick={setPage}
            className="text-violet-500 cursor-pointer underline"
          >
            contact me
          </span>{" "}
          anytime to discuss your project or ask any questions. I look forward
          to working with you!
        </p>
      </div>
    </div>
  );
};

export default Contact;
