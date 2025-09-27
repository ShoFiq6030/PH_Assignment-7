import React from "react";

export default function ResolvedCard({ task }) {
  return (
    <div className="max-w-[350px] h-[110px] bg-white rounded-xl p-4 ">
      <p className="text-green-600">✔️Completed</p>
      <h3 className="text-lg font-semibold">{task?.title}</h3>
    </div>
  );
}
