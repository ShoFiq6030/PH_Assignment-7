import { Suspense } from "react";
import Dashboard from "./components/Dashboard";
import Footer from "./components/Footer";
import Nav from "./components/Nav";
import ResolvedTask from "./components/ResolvedTask";
import TaskStatus from "./components/TaskStatus";
import TicketSection from "./components/TicketSection";
import fetchData from "./utils/fetchData";
import { ToastContainer, toast } from "react-toastify";

function App() {
  const data = fetchData();

  const onTicketCardClick = () => {
    const notify = () => toast("In Progress");
    notify();
  };

  return (
    <div className=" mx-auto ">
      <ToastContainer />

      <Nav />
      <div className="bg-[#F5F5F5] ">
        <Dashboard />
        <div className="container mx-auto flex gap-10">
          <div className="w-2/3">
            <Suspense fallback={<h2>Loading...</h2>}>
              <TicketSection
                data={data}
                onTicketCardClick={onTicketCardClick}
              />
            </Suspense>
          </div>

          <div className="w-1/3">
            <TaskStatus />
            <ResolvedTask />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default App;
