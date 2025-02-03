import { Plus } from "lucide-react"; 

export default function ButtonCompo({ text = "Button", className = "", Icon }) {
  let buttonContent;

  switch (Icon) {
    case "plusIcon":
      buttonContent = (
        <div className="flex items-center gap-2">
          <Plus size={18} /> <span>{text}</span>
        </div>
      );
      break;

    default:
      buttonContent = text;
      break;
  }

  return (
    <button
      className={`rounded-md py-2 px-[25px] text-white bg-orange hover:bg-orange-600 
      transition-all duration-300 ease-in-out transform hover:scale-100 flex items-center justify-center ${className}`}
    >
      {buttonContent}
    </button>
  );
}


