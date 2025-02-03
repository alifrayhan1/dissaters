import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Component/Navbar";
import Welcome from "./Component/Welcome";
import Incidents from "./Component/Incidents";

function App() {
  return (
    <Router>
      <main className="font-display">
        <Navbar />
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/incidences" element={<Incidents />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;