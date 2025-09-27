import React from "react";
import TaskStatusCard from "./TaskStatusCard";

export default function TaskStatus({ inProgressData,onTaskCompleteClick }) {
  console.log(inProgressData);
  return (
    <div>
      <h3 className="text-2xl font-semibold mb-4">TaskStatus</h3>

      {inProgressData?.length === 0 ? (
        <p className="text-gray-500 h-10">
          Select a ticket to add to Task Status
        </p>
      ) : (
        inProgressData?.map((task) => (
          <TaskStatusCard key={task.id} task={task} handleCompleteClick={onTaskCompleteClick} />
        ))
      )}
    </div>
  );
}
