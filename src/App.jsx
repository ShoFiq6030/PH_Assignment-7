import Dashboard from "./components/Dashboard";
import Footer from "./components/Footer";
import Nav from "./components/Nav";

function App() {
  return (
    <div className="container mx-auto">
      <Nav />
      <Dashboard />
      <Footer/>
    </div>
  );
}

export default App;
