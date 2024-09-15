import React from "react";
import { GoDotFill } from "react-icons/go";
import { CheckBadgeIcon, Square2StackIcon } from "@heroicons/react/16/solid";

const Home = ({ setPage }) => {
  return (
    <div
      id="home"
      className="container w-full opacity-0 bg-white rounded-md p-5 space-y-4 fade-slide-up"
      style={{ animationDelay: "0.3s", animationFillMode: "forwards" }}
    >
      <div className="flex items-center space-x-1">
        <GoDotFill className="h-3 w-3 text-slate-400" /> {/* Large dot icon */}
        <h1 className="text-light font-medium">Web Developer</h1>
        <CheckBadgeIcon
          className="h-4 w-4 text-violet-500 dark:text-violet-800"
        />
      </div>
      <div className="flex items-center flex-col-reverse md:flex-row space-y-2">
        <div className="flex-1 flex flex-col w-3/5 md:w-full space-y-6 text-center mt-3 md:mt-0 md:text-left">
          <div className="space-y-2">
            <h1 className="text font-bold text-4xl">I'm Diogo</h1>
            <p className="text-light">
              Freelancer web developer, specialized in responsive and
              user-friendly websites.
            </p>
          </div>

          <div className="flex space-x-1 sm:space-x-4 justify-center md:justify-normal">
            <button
              onClick={setPage}
              className="flex justify-center px-2 sm:px-4 py-2 items-center rounded-md bg-violet-600 border dark:border-transparent dark:bg-violet-800 text-white font-semibold dark:text-stone-100 hover:bg-violet-800 dark:hover:bg-violet-600 duration-200"
            >
              <p className="select-none">Hire Me</p>
            </button>
            <button className="flex justify-center space-x-1 px-2 sm:px-4 py-2 items-center rounded-md bg-white hover:bg-slate-100 dark:border-slate-700 border-[1.5px] dark:hover:bg-slate-700 dark:bg-transparent text-white font-semibold dark:text-stone-100 duration-200">
              <Square2StackIcon className="h-4 w-4 text" />
              <p className="text select-none">Copy Email</p>
            </button>
          </div>
        </div>
        <div className="flex-1 flex justify-center items-center mt-4 md:mt-0">
          <img
            src="/assets/diogo.jpg"
            alt="diogo's picture"
            className="rounded-full w-36 h-36 md:w-52 md:h-52 border-2 p-1 border-slate-200 object-cover select-none unselectable"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
