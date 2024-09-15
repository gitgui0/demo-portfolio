import React from "react";
import { GoDotFill } from "react-icons/go";

const Card = ({ title, desc, items }) => {
  return (
    <div className="border px-3 rounded-lg shadow-sm dark:shadow-none dark:border-slate-700  py-5 space-y-5">
      <div className="space-y-2">
        <h1 className="text text-xl font-semibold">{title}</h1>
        <div className="flex">
          <div className="">
            <p className="text-light">{desc}</p>
          </div>
        </div>
      </div>

      {items && items.length > 0 && (
        <div className="space-y-3 border-t pt-3 dark:border-slate-600">
          <h1 className="text text-lg font-semibold ">Key Features</h1>
          <div className="grid grid-cols-2 grid-rows-2 gap-1 gap-x-0">
            {items.map((item, index) => (
              <div key={index} className="flex items-center">
                <GoDotFill className="h-3 w-3 text-slate-400" />
                <p className="text-light pl-1">{item}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Card;
