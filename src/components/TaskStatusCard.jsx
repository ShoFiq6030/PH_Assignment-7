import React from "react";

export default function TaskStatusCard({ task, handleCompleteClick }) {
  return (
    <div className="max-w-[350px] min-h-[110px] bg-white rounded-xl p-4">
      <h3 className="text-lg font-semibold">{task?.title}</h3>
      <button
        className="btn bg-green-700 text-white w-full rounded-lg mt-4"
        onClick={() => handleCompleteClick(task)}
      >
        Complete
      </button>
    </div>
  );
}
