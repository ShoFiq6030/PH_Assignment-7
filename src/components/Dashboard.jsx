import React from "react";

export default function Dashboard({ inProgressData, resolvedTaskData }) {
  return (
    <div className="flex py-10 lg:gap-10 gap-2 container mx-auto ">
      <div className="w-1/2 max-h-[250px]  bg-linear-to-r from-[#632EE3] to-[#9F62F2] text-white">
        <div className="flex justify-between ">
          <div className="bg-[url(https://i.ibb.co.com/qM4YkCrt/vector1.png)] max-h-[250px] bg-no-repeat w-80 h-80"></div>
          <div className="flex flex-col justify-center items-center gap-4">
            <span className="text-xl text-nowrap">In-Progress</span>
            <p className="text-5xl font-bold">{inProgressData.length}</p>
          </div>
          <div className="bg-[url(./src/assets/vector1.png)] max-h-[250px] bg-no-repeat w-80 h-80 transform scale-x-[-1]"></div>
        </div>
      </div>
      <div className="w-1/2 max-h-[250px]  bg-linear-to-r from-[#54CF68] to-[#00827A] text-white">
        <div className="flex justify-between ">
          <div className="bg-[url(https://i.ibb.co.com/qM4YkCrt/vector1.png)] max-h-[250px] bg-no-repeat w-80 h-80"></div>
          <div className="flex flex-col justify-center items-center gap-4">
            <span className="text-xl text-nowrap">Resolved</span>
            <p className="text-5xl font-bold">{resolvedTaskData.length}</p>
          </div>
          <div className="bg-[url(./src/assets/vector1.png)] max-h-[250px] bg-no-repeat w-80 h-80 transform scale-x-[-1]"></div>
        </div>
      </div>
    </div>
  );
}
