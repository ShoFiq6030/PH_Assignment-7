import ResolvedCard from "./ResolvedCard";

export default function ResolvedTask({ resolvedTaskData }) {
  return (
    <div>
      <h3 className="text-2xl font-semibold mb-4">Resolved Task</h3>

      {resolvedTaskData?.length === 0 ? (
        <p className="text-gray-500 h-10">No resolved tasks yet.</p>
      ) : (
        resolvedTaskData?.map((task) => <ResolvedCard task={task} />)
      )}
    </div>
  );
}
