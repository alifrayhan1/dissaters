import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Component/Navbar";
import Welcome from "./Component/Welcome";
import Incidents from "./Component/Incidents";
import ChatAI from "./Component/ChatAI";
import NewIncidents from "./Component/NewIncidents";
import Describes from "./Component/Describes";

function App() {
  return (
    <Router>
      <main className="font-display">
        <Navbar />
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/incidences" element={<Incidents />} />
          <Route path="/new" element={<NewIncidents />} />
          <Route path="/get" element={<Describes />} />
        </Routes>
        <ChatAI />
      </main>
    </Router>
  );
}

export default App;
