import Dashboard from "../Common/Dashboard";
import tree from "../assets/tree.svg";
import location from "../Source/location";
import activity from "../Source/activity";
import document from "../Source/document";
import { MapPin, Banknote } from "lucide-react";


function Locations() {
  return (
    <>
      {" "}
      <section>
        <Dashboard
          description="Incidents - DR-4699 March 2023 Severe Storms "
          title={
            <span className="flex items-center space-x-2">
              <img src={tree} alt="Tree Icon" className="w-5 h-5" />
              <span>DR-4699 March 2023 Severe Storms</span>
            </span>
          }
        />
        <div className="grid grid-cols-1 lg:grid-cols-2 space-y-10 w-[85%] justify-center mx-auto my-10">
          <div>
            <div className="flex gap-2">
              <span className="bg-lighter w-12 h-12 rounded-full flex justify-center items-center">
                <MapPin className="text-light" />
              </span>
              <div>
                <h6 className="text-light">Location</h6>
                <h1 className="text-xl font-bold">
                  Tulare County, Los Angles, CA 23415
                </h1>
              </div>
            </div>
            <div className="flex gap-2 mt-5">
              <span className="bg-lighter w-12 h-12 rounded-full flex justify-center items-center">
                <Banknote className="text-light" />
              </span>
              <div>
                <h6 className="text-light">Approx. Cost:</h6>
                <h1 className="text-xl font-bold">$60,607,456.00</h1>
              </div>
            </div>
            <div className="border-t border-b border-lighter py-10 my-10">
              <h5 className="font-bold">Description</h5>
              <p className="text-light">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Accusamus magni natus debitis doloremque ad officiis iusto
                voluptate nisi beatae! Mollitia, doloremque. Voluptatum
                voluptatibus incidunt aliquid aspernatur cumque dolores debitis
                distinctio!
              </p>
            </div>
            <div>
              <div className="flex justify-between">
                <h5 className="font-bold">Locations</h5>
                <a className="text-light border-b cursor-pointer">See all</a>
              </div>
              <div className="flex justify-center">
                <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 my-5">
                  {location.map((info, index) => (
                    <div key={index} className="">
                      <img src={info.img} alt="image" />
                      <h1 className="font-bold text-dark">{info.heading}</h1>
                      <p className="text-light text-xs">{info.text}</p>
                      <h1 className="font-bold text-dark">{info.price}</h1>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="border-b border-t border-lighter my-10 py-10">
              <div className="flex justify-between">
                <h5 className="font-bold">Activities</h5>
                <a className="text-light border-b cursor-pointer">See all</a>
              </div>
                  <div className="my-5 space-y-5">
                    {activity.map((info,index)=>(
                        
                        <div key={index} className="bg-lighter p-2 rounded-lg gap-5 flex items-center">
                            <img src={info.img} alt="image" className="w-20 h-20"/>
                            <div className="space-y-2">
                                <h1 className="text-lg font-bold text-dark">{info.heading}</h1>
                                <p>{info.text}</p>
                                <p className="text-light"></p>
                                <h1>{info.price}</h1>
                            </div>
                        </div>
                    ))}
                  </div>
            </div>
            <div>
              <div className="flex justify-between">
                <h5 className="font-bold">Documents</h5>
                <a className="text-light border-b cursor-pointer">See all</a>
              </div>
                  <div className="my-5 space-y-5">
                    {document.map((info,index)=>(
                        
                        <div key={index} className="bg-lighter p-2 rounded-lg gap-5 flex items-center">
                            <img src={info.img} alt="image" className="w-20 h-20"/>
                            <div className="space-y-2">
                                <h1 className="text-lg font-bold text-dark">{info.heading}</h1>
                                <p>{info.text}</p>
                                <p className="text-light"></p>
                                <h1>{info.price}</h1>
                            </div>
                        </div>
                    ))}
                  </div>
            </div>
          </div>

          <div className="flex flex-col  mx-auto justify-start text-light space-y-2">
            <h6>Incident Map</h6>
            <img src="mapLo.png" alt="map" />
            <p>Start 19.1232, -118.233 End 19.3245, -119.2323</p>
          </div>
        </div>
      </section>
    </>
  );
}

export default Locations;
