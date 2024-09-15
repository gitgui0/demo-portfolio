import React from "react";
import { GoDotFill } from "react-icons/go";

const Skills = () => {
  return (
    <div
      id="skills"
      className="container p-5 opacity-0  space-y-3 fade-slide-up"
      style={{ animationDelay: "0.7s", animationFillMode: "forwards" }}
    >
      <div className="pb-2 space-y-2">
        <h1 className="text text-2xl font-semibold">Skills & Technologies</h1>
        <p className="text-light w-full md:w-10/12">
          Here's a snapshot of my technical skills and the tools I use to create
          exceptional web experiences.
        </p>
      </div>
      <div className="border-t py-2 space-y-3 dark:border-slate-600">
        <h1 className="text text-xl font-semibold">Technologies</h1>
        <div className="flex md:hidden flex-row pb-3 border-b dark:border-slate-600">
          <div className="flex-1">
            <div className="flex items-center">
              <h1 className="text font-medium text-lg">React</h1>
            </div>
            <p className="text-light">
              JavaScript library for building user interfaces with a
              component-based architecture.
            </p>
          </div>
          <div className="w-1/3 justify-center lg:justify-end items-center flex">
            <img
              src="/assets/react.png"
              alt="react symbol"
              className="h-16 select-none unselectable"
            />
          </div>
        </div>
        <div className="flex md:hidden flex-row py-3 border-b dark:border-slate-600">
          <div className="flex-1">
            <div className="flex items-center">
              <h1 className="text font-medium text-lg">Tailwind</h1>
            </div>
            <p className="text-light">
              JavaScript library for building user interfaces with a
              component-based architecture.
            </p>
          </div>
          <div className="w-1/3 justify-center lg:justify-end items-center flex">
            <img
              src="/assets/tailwind.png"
              alt="tailwind symbol"
              className="h-10 select-none unselectable"
            />
          </div>
        </div>
        <div className="flex md:hidden flex-row pt-3">
          <div className="flex-1">
            <div className="flex items-center">
              <h1 className="text font-medium text-lg">Springboot</h1>
            </div>
            <p className="text-light">
              Java framework for building enterprise-grade web applications and
              microservices with a focus on rapid development, scalability, and
              convention over configuration.
            </p>
          </div>
          <div className="w-1/3 justify-center lg:justify-end items-center flex">
            <img
              src="/assets/springboot.png"
              alt="spring boot symbol"
              className="h-14 select-none unselectable"
            />
          </div>
        </div>
        {/*  */}
        <div className="hidden md:flex flex-row pb-3 border-b dark:border-slate-600">
          <div className="min-w-20 items-center flex">
            <img
              src="/assets/react.png"
              alt="react symbol"
              className="h-14 select-none unselectable"
            />
          </div>
          <div className="flex-1">
            <div className="flex items-center">
              <h1 className="text font-medium text-lg">React</h1>
            </div>
            <p className="text-light">
              JavaScript library for building user interfaces with a
              component-based architecture.
            </p>
          </div>
        </div>
        <div className="hidden md:flex flex-row py-3 border-b dark:border-slate-600">
          <div className=" min-w-20 items-center flex">
            <img
              src="/assets/tailwind.png"
              alt="tailwind symbol"
              className="h-10 select-none unselectable"
            />
          </div>
          <div className="flex-1">
            <div className="flex items-center">
              <h1 className="text font-medium text-lg">Tailwind</h1>
            </div>
            <p className="text-light">
              JavaScript library for building user interfaces with a
              component-based architecture.
            </p>
          </div>
        </div>
        <div className="hidden md:flex flex-row pt-3">
          <div className="min-w-20 items-center flex">
            <img
              src="/assets/springboot.png"
              alt="spring boot symbol"
              className="h-14 select-none unselectable"
            />
          </div>
          <div className="flex-1">
            <div className="flex items-center">
              <h1 className="text font-medium text-lg">Springboot</h1>
            </div>
            <p className="text-light">
              Java framework for building enterprise-grade web applications and
              microservices with a focus on rapid development, scalability, and
              convention over configuration.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
