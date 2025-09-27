import { Suspense, useEffect, useState } from "react";
import Dashboard from "./components/Dashboard";
import Footer from "./components/Footer";
import Nav from "./components/Nav";
import ResolvedTask from "./components/ResolvedTask";
import TaskStatus from "./components/TaskStatus";
import TicketSection from "./components/TicketSection";
import fetchData from "./utils/fetchData";
import { ToastContainer, toast } from "react-toastify";

function App() {
  // const data = fetchData();
  const [ticketData, setTicketData] = useState([]);
  const [inProgressData, setInProgressData] = useState([]);
  const [resolvedTaskData, setResolvedTaskData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetchData().then((data) => setTicketData(data));
    setLoading(false);
  }, []);

  const onTicketCardClick = (ticket) => {
    const notify = () => toast("In Progress");
    notify();
    setInProgressData((prev) => [...prev, ticket]);
  };

  const onTaskCompleteClick = (task) => {
    const notify = () => toast("Task Completed");
    notify();
    setInProgressData((prev) => prev.filter((t) => t.id !== task.id));
    setResolvedTaskData((prev) => [...prev, task]);
    setTicketData((prev) => prev.filter((t) => t.id !== task.id));
  };

  return (
    <div className=" ">
      <ToastContainer />

      <Nav />
      <div className="bg-[#F5F5F5] ">
        <Dashboard
          inProgressData={inProgressData}
          resolvedTaskData={resolvedTaskData}
        />
        <div className="container mx-auto flex flex-col-reverse lg:flex-row gap-10">
          <div className="lg:w-2/3">
            {/* <Suspense fallback={<h2 className="h-[60vh]">Loading...</h2>}> */}

            {loading ? (
              <h2 className="h-[60vh] text-center">Loading...</h2>
            ) : (
              <TicketSection
                data={ticketData}
                onTicketCardClick={onTicketCardClick}
              />
            )}

            {/* </Suspense> */}
          </div>

          <div className="lg:w-1/3">
            <TaskStatus
              inProgressData={inProgressData}
              onTaskCompleteClick={onTaskCompleteClick}
            />
            <ResolvedTask resolvedTaskData={resolvedTaskData} />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default App;
