import React from "react";
import TaskStatusCard from "./TaskStatusCard";

export default function ResolvedTask() {
  return (
    <div>
      <h3 className="text-2xl font-semibold mb-4">Resolved Task</h3>
      <TaskStatusCard />
    </div>
  );
}
