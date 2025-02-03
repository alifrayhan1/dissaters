import "./App.css";
import Card from "./Common/Card";
import Dashboard from "./Common/Dashboard";
import Navbar from "./Component/Navbar";

function App() {
  return (
    <>
      <main className="font-display">
        <Navbar />
        <Dashboard/>
        <Card/>
      </main>
    </>
  );
}

export default App;
