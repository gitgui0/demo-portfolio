import React from "react";

const Icon = ({ children, tooltip, sun, non }) => {
  return (
    <div className="group relative flex items-center justify-center cursor-pointer select-none">
      {/* Icon with bounce-in on render and hover-bounce on hover */}
      <div
        className={`bg-transparent p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-700 ${
          !sun || non
            ? "transition-transform duration-300 ease-out group-hover:-translate-y-[2px]"
            : "hover:animate-wiggle"
        }`}
      >
        {children}
      </div>

      {/* Tooltip with smooth fade and movement */}
      {tooltip && (
        <div className="text group delay-300  absolute bottom-full bg-opacity-40 flex opacity-0 items-center justify-center px-2 py-1 bg-slate-200  dark:bg-slate-700 transition group-hover:-translate-y-1 group-hover:opacity-100  text-xs rounded-md ease-in-out">
          {tooltip}
        </div>
      )}
    </div>
  );
};

export default Icon;
