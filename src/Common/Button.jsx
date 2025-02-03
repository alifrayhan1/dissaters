import { Plus } from "lucide-react";
import clsx from "clsx";
import { twMerge } from "tailwind-merge";
export default function ButtonCompo({
  text = "Button",
  className = "",
  Icon,
  onClick,
}) {
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

  const mergedClasses = twMerge(
    clsx(
      "rounded-md py-2 px-[25px] text-white bg-orange hover:bg-orange-600 transition-all duration-300 ease-in-out transform hover:scale-100 flex items-center justify-center no-underline",
      className
    )
  );

  return (
    <button className={mergedClasses} onClick={onClick} type="button">
      {buttonContent}
    </button>
  );
}
