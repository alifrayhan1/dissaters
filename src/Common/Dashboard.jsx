import HeaderCompo from "../Shear/HeaderCompo";
import ButtonCompo from "./Button";
import FilterInput from "./FilterInput";
import SearchBar from "./SearchBar";





function Dashboard() {
  return (
    <>
      <HeaderCompo title="Dashboard" description="Welcome back">
        <SearchBar placeholder="Search incident"/>
        <FilterInput placeholder="Short: Date modified"/>
        <ButtonCompo text="Cypher AI"/>
      </HeaderCompo>
      
    </>
  );
}

export default Dashboard;
