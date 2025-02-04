import { useNavigate } from "react-router-dom";
import DescribesHeader from "./DescribesHeader";

function FinishPage() {
  const handleBackClick = useNavigate();
  const handleNextClick = useNavigate();
  return (
    <>
      <section>
        <DescribesHeader
          text="Finished"
          onBackClick={() => handleBackClick("/next")}
          onNextClick={() => handleNextClick("/incidences")}
        />
        <div className="w-[80%] mx-auto space-y-2 mt-10 mb-20 flex flex-col justify-center">
          <h1 className="text-2xl text-dark font-bold">
            Where’s the incident?
          </h1>
          <p className="text-sm text-light">
            Enter a GPS, address. or pin point on the map. Try to be as accurate
            as possible, or click:Jurisdiction Wide
          </p>
          <img src="mapF.png" alt="map" />
        </div>
      </section>
    </>
  );
}

export default FinishPage;
