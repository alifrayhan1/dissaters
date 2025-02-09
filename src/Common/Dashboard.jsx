import HeaderCompo from "../Component/HeaderCompo";
import ButtonCompo from "./Button";
import FilterInput from "./FilterInput";
import SearchBar from "./SearchBar";

function Dashboard({
  title = "Dashboard",
  description = "Welcome back",
  text = "Cypher AI",
  Icon = "",
  onClick,
}) {
  return (
    <>
      <HeaderCompo title={title} description={description}>
        <SearchBar placeholder="Search incident" />
        <FilterInput placeholder="Short: Date modified" />
        <ButtonCompo text={text} Icon={Icon} onClick={onClick} />
      </HeaderCompo>
    </>
  );
}

export default Dashboard;
