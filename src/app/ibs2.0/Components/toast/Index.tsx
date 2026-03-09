import type { ToastProps } from "../../types/Toast"
import Error from "../../assets/gifs/Error.gif"
import Success from "../../assets/gifs/Success.gif"
import Image from "next/image";

export const Toast: React.FC<ToastProps> = ({ message, type }) => {
  const baseStyle =
    "fixed top-4 md:right-4 md:h-[100px] h-[80px] w-[300px] right-2 md:w-[400px] flex justify-between items-center gap-3 p-4 rounded-lg shadow-lg transition-opacity duration-300 bg-[#FFFFFF] z-50";

  const typeStyles = [
    {
      type: "success",
      style: "text-[#0FC99F]",
      icon: Success,
    },
    {
      type: "error",
      style: "text-[#EF4444]",
      icon: Error,
    },
  ];

  const styleConfig = typeStyles.find((t) => t.type === type);

  return (
    <div className={`${baseStyle} ${styleConfig?.style}`}>
      <div className="flex flex-col w-[60%] h-full justify-center">
        <h2 className="text-[12px] font-medium">
          {type.charAt(0).toUpperCase() + type.slice(1)}
        </h2>
        <p className="md:text-[15px] text-[10px] font-medium text-[#1F2937]">{message}</p>
      </div>
      {styleConfig?.icon && (
        <div className="ml-4 w-[40%] h-full flex justify-end items-center">
          <Image alt="" src={styleConfig.icon}  className="h-10 w-10" />
        </div>
      )}
    </div>
  );
};
