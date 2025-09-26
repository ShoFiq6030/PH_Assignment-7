import { Suspense } from "react";
import Dashboard from "./components/Dashboard";
import Footer from "./components/Footer";
import Nav from "./components/Nav";
import ResolvedTask from "./components/ResolvedTask";
import TaskStatus from "./components/TaskStatus";
import TicketSection from "./components/TicketSection";
import fetchData from "./utils/fetchData";

function App() {
  const data = fetchData();

  return (
    <div className=" mx-auto ">
      <Nav />
      <div className="bg-[#F5F5F5] ">
        <Dashboard />
        <div className="container mx-auto flex gap-10">
          <div className="w-2/3">
            <Suspense fallback={<h2>Loading...</h2>}>
              <TicketSection data={data} />
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
