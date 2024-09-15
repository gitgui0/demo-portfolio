import React, { useState } from "react";
import {
  HomeIcon,
  UserIcon,
  WrenchIcon,
  BriefcaseIcon,
  SunIcon,
  MoonIcon,
  ArrowDownIcon,
  ArrowUpIcon,
} from "@heroicons/react/24/solid";

import { FaGithub, FaInstagram, FaTwitter } from "react-icons/fa";

import Icon from "./icon";
import { useTheme } from "../ThemeContext";

const Header = ({ setPage }) => {
  const { theme, toggleTheme } = useTheme();
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div
      className="sticky w-full opacity-0 top-0 pt-5 z-50 fade-slide-up"
      style={{ animationDelay: "0.1s", animationFillMode: "forwards" }}
    >
      <div className="relative flex p-2 md:p-1 justify-between lg:justify-around items-center header">
        <div className="pr-3 md:border-r-[1px] dark:border-slate-700 flex space-x-1 md:space-x-4">
          <a href="#home">
            <Icon tooltip="Home">
              <HomeIcon className="icon" />
            </Icon>
          </a>
          <a href="#about">
            <Icon tooltip="About">
              <UserIcon className="icon" />
            </Icon>
          </a>
          <a href="#skills">
            <Icon tooltip="Skills">
              <WrenchIcon className="icon" />
            </Icon>
          </a>
          <a href="#services">
            <Icon tooltip="Services">
              <BriefcaseIcon className="icon" />
            </Icon>
          </a>
        </div>

        <div className="hidden md:flex items-center space-x-2">
          <Icon non tooltip="GitHub">
            <FaGithub className="icon" />
          </Icon>
          <Icon non tooltip="Instagram">
            <FaInstagram className="icon" />
          </Icon>
          <Icon non tooltip="Twitter">
            <FaTwitter className="icon" />
          </Icon>
        </div>

        {/* Mobile Menu Toggle Button */}
        {!showMenu && (
          <div className="absolute bottom-[-15px] left-1/2 transform -translate-x-1/2 md:hidden z-10 ">
            <button
            style={{ animationDelay: "1s"}}
              onClick={() => setShowMenu(true)}
              className=" animate-[custom-bounce_5s_ease-in-out_infinite]  hover:animate-none flex items-center justify-center  shadow-sm shadow-slate-300 dark:shadow-none rounded-full border-b dark:border-slate-600 bg-white dark:bg-slate-800"
            >
              <Icon sun>
                <ArrowDownIcon className="h-4 text-slate-500 dark:text-slate-400 animate-slide-up-fast" />
              </Icon>
            </button>
          </div>
        )}

        {showMenu && (
          <div className=" absolute bottom-[-60px] left-1/2 transform -translate-x-1/2 md:hidden z-10 ">
            <div className="bg-white dark:bg-slate-800 rounded-lg shadow-sm shadow-slate-300 dark:shadow-none border dark:border-slate-600 animate-slide-down flex flex-col justify-center">
              <div className="flex items-center space-x-2">
                <Icon non tooltip="GitHub">
                  <FaGithub className="icon" />
                </Icon>
                <Icon non tooltip="Instagram">
                  <FaInstagram className="icon" />
                </Icon>
                <Icon non tooltip="Twitter">
                  <FaTwitter className="icon" />
                </Icon>
              </div>
              <div className="w-full z-10">
                <button
                  onClick={() => setShowMenu(false)}
                  className="flex items-center justify-center shadow-slate-300 w-full rounded-b-lg dark:border-slate-600 bg-white dark:bg-slate-800 py-2 sm:py-1 md:py-[0.5px] lg:py-0 hover:bg-slate-200 dark:hover:bg-slate-700"
                >
                  <div>
                    <ArrowUpIcon className="h-3 text-slate-500" />
                  </div>
                </button>
              </div>
            </div>
          </div>
        )}

        <div className="flex border-l-[1px] dark:border-slate-700 m-2 pl-1 space-x-2 md:space-x-4">
          <button onClick={toggleTheme}>
            <Icon sun>
              {theme === "dark" ? (
                <MoonIcon className="icon" />
              ) : (
                <SunIcon className="icon" />
              )}
            </Icon>
          </button>

          <button
            onClick={setPage}
            className="hidden sm:flex justify-center px-2 sm:px-4 items-center rounded-md bg-violet-600 dark:bg-violet-800 text-white text-sm sm:text-base font-semibold dark:text-stone-100 hover:bg-violet-800 dark:hover:bg-violet-600 duration-200"
          >
            <p className="select-none">Hire Me</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
