import { cn } from "@/lib/utils";

import { IconButtonProps } from "./IconButton.types";
export const IconButton = (props: IconButtonProps) => {
  const { onClick, icon, className } = props;
  return (
    <button
      onClick={onClick}
      className={cn(
        "rounded-md flex-items-center bg-slate-600/80 border shadow-md p-1 hover:scale-105 transition cursor-pointer",
        className
      )}
    >
      {icon}
    </button>
  );
};
