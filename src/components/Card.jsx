import { faCalendar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export default function Card() {
  return (
    <div className="max-w-[513px] h-[148px] bg-white p-4 text-gray-500 rounded-xl">
      <div className=" flex justify-between">
        <h3 className="text-xl font-bold text-black">Login Issue</h3>
        <div className="flex items-center gap-1 bg-green-200 w-22 h-8 rounded-full p-3">
          <span className="p-2 w-2 h-2 rounded-full bg-green-800"></span>
          <span className="text-green-800 font-semibold">open</span>
        </div>
      </div>
      <p>
        Customer is unable to log in to their account. They've tried resetting
        their password multiple times but still...
      </p>
      
      <div className="flex justify-between mt-4">
        <div className="flex gap-2">
          <span>#1001</span>
          <span className="text-red-700">HIGH PRIORITY</span>
        </div>
        <div className="flex gap-2">
          <span> JOHN SMITH</span>
          <span><FontAwesomeIcon icon={faCalendar} className="text-2xl " /> 1/15/2024</span>
        </div>
      </div>
    </div>
  );
}
