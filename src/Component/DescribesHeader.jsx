import ButtonCompo from "../Common/Button";
import HeaderTitle from "../Common/HeaderTitle";
import { X } from "lucide-react";

function DescribesHeader({ onBackClick, onNextClick, text="Next Step" }) {
  return (
    <>
      <section>
        <div className="grid grid-cols-1 lg:grid-cols-3  items-center gap-5 p-4">
          <div className="flex  items-center gap-2">
            <div className="w-10 h-10 bg-white border border-lighter rounded-full flex justify-center items-center">
              <X className="text-light w-5 h-5" />
            </div>
            <HeaderTitle
              title="New Incident"
              description="Home - Incidents - New Incident"
            />
          </div>

          <div className="w-full flex justify-start">
            <span className="h-1 w-1/5 bg-orange"></span>
            <span className="h-1 w-4/5 bg-lighter"></span>
          </div>
          <div className="flex gap-2 lg:justify-end justify-center">
            <ButtonCompo
              onClick={onBackClick}
              className="bg-white text-dark border border-lighter hover:bg-lighter"
              text="Back"
            />
            <ButtonCompo text={text} onClick={onNextClick} />
          </div>
        </div>
      </section>
    </>
  );
}

export default DescribesHeader;
