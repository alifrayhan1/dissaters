import Card from "../Common/Card";
import Dashboard from "../Common/Dashboard";
import { useNavigate } from "react-router-dom";

function Incidents() {
  const navigate = useNavigate();
  return (
    <>
      <Dashboard
        title="Incidents"
        description="Home - Incidents"
        Icon="plusIcon"
        text="New Incident"
        onClick={() => navigate("/new")}
      />
      <Card />
    </>
  );
}

export default Incidents;
