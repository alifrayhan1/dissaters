import DescribesHeader from "./DescribesHeader";
import BestInfo from "../Source/best";
import { useNavigate } from "react-router-dom";

function Describes() {
  const handleBackClick = useNavigate();
  const handleNextClick = useNavigate();

  return (
    <>
      <section className="space-y-5">
        <DescribesHeader
          onBackClick={() => handleBackClick("/new")}
          onNextClick={() => handleNextClick("/next")}
        />
        <div className="space-y-5 mb-20">
          <h1 className="text-2xl font-bold text-dark w-[80%] mx-auto">
            Which of these best describes the incident?
          </h1>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 justify-center items-center gap-2 w-[80%] mx-auto">
            {BestInfo.map((info, index) => (
              <div
                key={index}
                className="flex justify-center items-center gap-2 bg-lighter rounded-md h-18"
              >
                <img src={info.img} alt="" />
                <p className="text-light">{info.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Describes;
