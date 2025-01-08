import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Dashboard from "./components/Dashboard";

const App = () => {
  return (
    <>
      <div className="text-[#ffffff]">
        <Navbar />
        <div className="relative left-64">
          <Header />
          <Dashboard />
        </div>
      </div>
    </>
  );
};

export default App;
