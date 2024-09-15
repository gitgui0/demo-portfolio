import React from "react";
import { ArrowLeftIcon } from "@heroicons/react/24/solid";

const ContactPage = ({ setPage }) => {
  return (
    <div
      className="min-h-screen bg-white dark:bg-slate-950 flex flex-col justify-center items-center py-12 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-2xl w-full  bg-white dark:bg-slate-800 p-8 rounded-lg shadow-lg">
        <div className="flex justify-between items-center">
          <h2 className="text-3xl font-bold text mb-4">Contact Me</h2>
          <div
            onClick={setPage}
            className="flex items-center space-x-1 group cursor-pointer  pr-1 "
          >
            <ArrowLeftIcon className=" h-3 w-3 text " />
            <h1 className="text-light group-hover:underline select-none">
              Go back
            </h1>
          </div>
        </div>

        <p className="text-gray-600 dark:text-gray-300 mb-8">
          I’m excited to hear about your project! Please fill out the form
          below, and I’ll get back to you as soon as possible.
        </p>

        <form action="#" method="POST" className="space-y-6">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300"
            >
              Your Name / Company
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-violet-500 focus:border-violet-500 sm:text-sm dark:bg-slate-900 dark:border-slate-700 dark:text-gray-100"
            />
          </div>

          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300"
            >
              Your Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="4"
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-violet-500 focus:border-violet-500 sm:text-sm dark:bg-slate-900 dark:border-slate-700 dark:text-gray-100"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-violet-500 text-white py-2 px-4 rounded-md shadow-sm hover:bg-violet-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-violet-500"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;
