import ButtonCompo from "../Common/Button";
import CardInfo from "../Source/NewIncidentsCardInfo,js";
import { useNavigate } from "react-router-dom";

function NewIncidents() {
  const navigate = useNavigate();
  return (
    <>
      <section>
        <div className="flex flex-col justify-center items-center text-center p-10 space-y-2">
          <h1 className="text-[32px] font-bold">Let’s get started</h1>
          <p className="text-light   sm:w-1/2">Lorem ipsum dolar sit general sac mascho werhoLorem ipsum dolar sit general sac mascho werhoLorem ipsum dolar sit gene</p>
          <div className="flex items-center justify-center my-8 w-full">
            <span className="w-5 h-5 bg-lighter rounded-full"></span>
            <span className="w-1/5 h-1 bg-lighter"></span>
            <span className="w-5 h-5 bg-lighter rounded-full"></span>
            <span className="w-1/5 h-1 bg-lighter"></span>
            <span className="w-5 h-5 bg-lighter rounded-full"></span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-center gap-10">
            {CardInfo.map((info,index)=>(
              <div key={index} className="text-start space-y-5 bg-lighter p-3 rounded-2xl shadow-xl h-64">
                <img src={info.img} alt="" />
                <h1 className="text-xl font-bold">{info.heading}</h1>
                <p className="text-sm text-light">{info.text}</p>
              </div>
            ))}
          </div>
          <ButtonCompo text="Get Started" className="mt-10"   onClick={() => navigate("/get")}/>
        </div>
      </section>
    </>
  );
}

export default NewIncidents;
