import { Plus } from "lucide-react"; 

export default function Button({ text = "Button", className = "", variant }) {
  let buttonContent;

  switch (variant) {
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
      transition-all duration-300 ease-in-out transform hover:scale-95 flex items-center justify-center ${className}`}
    >
      {buttonContent}
    </button>
  );
}


