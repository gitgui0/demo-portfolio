import React from "react";

const About = () => {
  return (
    <div
      id="about"
      className="container p-5 opacity-0 space-y-2 fade-slide-up"
      style={{ animationDelay: "0.5s", animationFillMode: "forwards" }}
    >
      <h1 className="text font-semibold text-2xl  ">About Me</h1>
      <p className="text-light md:hidden">
        Hi, I'm Diogo, a dedicated web developer with a focus on creating
        seamless, user-friendly websites.
      </p>
      <p className="text-light md:hidden ">
        With a background in Computer Science and hands-on experience in web
        development, I bring a blend of technical skills and creative
        problem-solving to every project.
      </p>
      <p className="text-light hidden md:block">
        Hi, I'm Diogo, a dedicated web developer with a focus on creating
        seamless, user-friendly websites. With a background in Computer Science
        and hands-on experience in web development, I bring a blend of technical
        skills and creative problem-solving to every project.
      </p>
    </div>
  );
};

export default About;
