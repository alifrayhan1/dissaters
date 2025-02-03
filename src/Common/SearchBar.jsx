import { Search } from "lucide-react";


const SearchBar = ({ placeholder }) => (
    <div className="flex items-center bg-white p-2 rounded-lg shadow-md w-full lg:w-auto">
      <Search className="text-gray-500 flex-shrink-0" />
      <input
        type="text"
        placeholder={placeholder}
        className="border-none outline-none ml-2 w-full"
      />
    </div>
  );
export default SearchBar;   