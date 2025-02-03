import "./App.css";
import Card from "./Common/Card";
import Dashboard from "./Common/Dashboard";
import ChatAI from "./Component/ChatAI";
import Navbar from "./Component/Navbar";

function App() {
  return (
    <>
      <main className="font-display">
        <Navbar/>
        <Dashboard/>
        <Card/>
        <ChatAI/>
      </main>
    </>
  );
}

export default App;
