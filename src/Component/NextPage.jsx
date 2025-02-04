import DescribesHeader from "./DescribesHeader";
import { useNavigate } from "react-router-dom";

function NextPage() {
  const handleBackClick = useNavigate();
  const handleNextClick = useNavigate();
  return (
    <section>
      <DescribesHeader
        onBackClick={() => handleBackClick("/get")}
        onNextClick={() => handleNextClick("/finish")}
      />
      <div className="w-[80%] mx-auto mt-10 space-y-5">
        <h1 className="text-2xl font-bold text-dark">
          Let’s give the incident a title?
        </h1>
        <p className="text-sm text-light">
          Make a title that will easily identify the incidents
        </p>

        <input
          type="text"
          placeholder="Add title here"
          className="py-3 px-2.5 w-full bg-lighter rounded-lg outline-none border border-light"
        />
        <h1 className="text-2xl font-bold text-dark">
          Describe what happened during the incident?
        </h1>
        <p className="text-sm text-light">
          Share some information about the incident. The when, where, how.
        </p>
        <textarea
          placeholder="Add title here"
          className="px-2.5 py-2 w-full h-24 bg-lighter rounded-lg outline-none border border-light resize-none"
        ></textarea>
      </div>
    </section>
  );
}

export default NextPage;
