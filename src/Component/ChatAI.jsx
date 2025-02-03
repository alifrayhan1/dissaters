import { Camera, BookImage, Paperclip, X } from "lucide-react";
import ButtonCompo from "../Common/Button";
import { useState } from "react";

function ChatAI() {
  const [isChatOpen, setChatAi] = useState(false);
  const HandelChatAi = () => {
    setChatAi(!isChatOpen);
  };

  return (
    <>
      <section>
        <div className="relative w-full">
          <button className="  fixed right-10 bottom-10" onClick={HandelChatAi}>
            {isChatOpen ? (
              <div className="w-16 h-16 text-dark bg-lighter rounded-full flex justify-center items-center">
                <X className="w-10 h-10" />{" "}
              </div>
            ) : (
              <div className="w-16 h-16 bg-orange rounded-full flex justify-center items-center">
                <img src="C.png" alt="C Letter" />{" "}
              </div>
            )}
          </button>

          {isChatOpen && (
            <div className="w-[331px] h-[475px] fixed right-10 bottom-30 shadow-md rounded-2xl bg-lighter">
              <h1 className="bg-orange text-lg font-bold text-white rounded-t-2xl py-6 px-4 flex justify-between">
                Chat with Cypher
              </h1>

              <div>
                <p className="ml-16 p-2 m-2 bg-dark rounded-xl text-lighter">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>
                <p className="mr-16 p-2 m-2 rounded-xl bg-white text-light">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>
                <p className="mr-16 p-2 m-2 rounded-xl bg-white text-light">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>
                <p className="ml-16 p-2 m-2 bg-dark rounded-xl text-lighter">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>
              </div>

              <input
                type="text"
                placeholder="Enter your question..."
                className="ml-4 border-[1px] border-light rounded-lg p-2 w-full max-w-[300px]"
              />

              <div className="flex justify-between items-center p-4">
                <div className="flex justify-start items-center space-x-2">
                  <Camera />
                  <BookImage />
                  <Paperclip />
                </div>
                <ButtonCompo text="Send" className="rounded-full" />
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
}

export default ChatAI;
