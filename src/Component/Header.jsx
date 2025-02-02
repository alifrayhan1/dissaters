import { Search } from "lucide-react";
import ButtonCompo from "../Shear/Button";

function Header({ description = "Welcome back", title = "Dashboard" }) {
  return (
    <>
      <section className="bg-lighter px-4 py-4 shadow-md w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 items-center">
          <div className="w-full">
            <h6 className="text-light text-xs">{description}</h6>
            <h1 className="font-bold text-2xl leading-8 text-dark">
              {title}
            </h1>
          </div>
          <div className="w-full flex flex-col lg:flex-row lg:space-x-2 space-y-2 lg:space-y-0 gap-2">
            <div className="flex items-center bg-white p-2 rounded-lg shadow-md w-full lg:w-auto">
              <Search className="flex-shrink-0" />
              <input 
                type="text" 
                placeholder="Search incident" 
                className="border-none outline-none ml-2 w-full"
              />
            </div>
            <input 
              type="text" 
              placeholder="Short: Date modified" 
              className="bg-white p-2 rounded-lg border-none outline-none shadow-md w-full lg:w-auto"
            />
            <ButtonCompo className="w-full lg:w-auto" />
          </div>
        </div>
      </section>
    </>
  );
}

export default Header;



