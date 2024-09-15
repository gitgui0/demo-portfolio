import React from "react";
import Card from "./card";

const Services = () => {
  return (
    <div id="services" className="container opacity-0 p-5 space-y-4 fade-slide-up"
      style={{ animationDelay: "0.9s", animationFillMode: "forwards" }}>
      <h1 className="text text-2xl font-semibold"> Services</h1>
      <div className="mb-5">
        <p className="text-light">
          I specialize in creating high-impact web solutions tailored to your
          unique needs. Whether you're looking to enhance your online presence,
          fix issues, or showcase your work, I've got you covered. Here's a
          brief overview of my key services:
        </p>
      </div>
      <div className="space-y-3">
        <Card
          title={"Custom Landing Pages"}
          desc={
            "Need a compelling landing page to capture attention? I create high-converting, responsive landing pages tailored to your specific needs."
          }
          items={[
            "Design Consultation",
            "Custom Layout",
            "Responsive Design",
            "SEO Optimization",
          ]}
        />

        <Card
          title={"Website Fixes & Enhancements"}
          desc={
            "From fixing minor bugs to optimizing performance, I provide quick and efficient solutions to improve your website’s functionality and user experience."
          }
          items={[
            "Bug Fixes",
            "Performance Optimization",
            "User Experience (UX) Improvements",
            "Security Updates",
          ]}
        />

        <Card
          title={"Portfolio Websites"}
          desc={
            "Showcase your work with a professionally designed portfolio that highlights your skills and projects. Let potential clients or employers see your best work in a beautifully crafted online space."
          }
          items={[
            "Custom Design",
            "Project Showcases",
            "Responsive Layout",
            "Contact Form",
          ]}
        />

        <Card
          title={"Custom Packages"}
          desc={
            "Not sure which service fits your needs or have a unique project in mind? I offer custom packages tailored to your specific requirements. Reach out to discuss how we can create a solution that perfectly matches your vision."
          }
          items={[]}
        />
      </div>
      
    </div>
  );
};

export default Services;
