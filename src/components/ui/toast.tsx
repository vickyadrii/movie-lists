import { useEffect, useState } from "react";
import iconSuccess from "@/assets/ic_success.svg";
import iconError from "@/assets/ic_error.svg";

type ToastType = "success" | "error";

export const Toast = ({ message, type, duration }: { message: string; type: ToastType; duration: number }) => {
  const [isVisible, setIsVisible] = useState<boolean>(true);
  const icon = type === "success" ? iconSuccess : iconError;

  useEffect(() => {
    const fadeOutTimer = setTimeout(() => {
      setIsVisible(false);
    }, duration);
    return () => clearTimeout(fadeOutTimer);
  }, [duration]);

  return (
    <div
      className={`flex items-center gap-2 px-4 py-2 rounded shadow-lg bg-white transition-opacity duration-500 ${
        isVisible ? "animate-fade-in" : "animate-fade-out"
      }`}
    >
      <img src={icon} alt={`${type} icon`} className="w-6 h-6" />
      <span className="text-slate-800 text-sm">{message}</span>
    </div>
  );
};
