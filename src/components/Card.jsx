import { faCalendar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export default function Card({ ticket, onTicketCardClick }) {
  const { id, title, description, status, priority, customer, createdAt } =
    ticket;

  const date = new Date(createdAt).toLocaleDateString("en-US");

  return (
    <div
      className="max-w-[513px] min-h-[160px] bg-white p-5 text-gray-500 rounded-xl"
      onClick={() => onTicketCardClick(ticket)}
    >
      <div className=" flex justify-between mb-2">
        <h3 className="text-xl font-semibold text-black">{title}</h3>
        {status === "Open" && (
          <div className="flex items-center gap-1 bg-green-200  h-8 rounded-full p-3">
            <span className="p-2 w-2 h-2 rounded-full bg-green-800"></span>
            <span className="text-green-800 font-semibold text-nowrap">
              {status}
            </span>
          </div>
        )}
        {status === "In-Progress" && (
          <div className="flex items-center gap-1 bg-yellow-400  h-8 rounded-full p-3">
            <span className="p-2 w-2 h-2 rounded-full bg-yellow-600"></span>
            <span className="text-yellow-700 font-semibold text-nowrap">
              {status}
            </span>
          </div>
        )}
      </div>
      <p>{description}</p>

      <div className="flex justify-between mt-4">
        <div className="flex gap-2">
          <span>#{id}</span>
          <span
            className={`
               ${priority === "Low" && "text-green-700"}
            ${priority === "High" && "text-red-600"} 
            ${priority === "Critical" && "text-red-900"}
            ${priority === "Medium" && "text-yellow-700"}
            uppercase
            `}
          >
            {priority} PRIORITY
          </span>
        </div>
        <div className="flex gap-2">
          <span>{customer}</span>
          <span>
            <FontAwesomeIcon icon={faCalendar} className="text-2xl " /> {date}
          </span>
        </div>
      </div>
    </div>
  );
}
