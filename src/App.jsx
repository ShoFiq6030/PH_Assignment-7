import Dashboard from "./components/Dashboard";
import Footer from "./components/Footer";
import Nav from "./components/Nav";
import TicketSection from "./components/TicketSection";

function App() {
  return (
    <div className=" mx-auto ">
      <Nav />
      <div className="bg-[#F5F5F5] ">
        <Dashboard />
        <TicketSection />
        
      </div>

      <Footer />
    </div>
  );
}

export default App;
