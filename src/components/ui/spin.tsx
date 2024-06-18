import { useEffect } from "react";
import iconSpin from "@/assets/ic_spin.svg";

type Props = {
  spinning: boolean;
  children: React.ReactNode;
};

const Spin = ({ spinning, children }: Props) => {
  useEffect(() => {
    if (spinning) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [spinning]);

  return (
    <div className="relative">
      {spinning && (
        <div className="absolute inset-0 flex justify-center items-center opacity-50 z-10">
          <img src={iconSpin} alt="ic_spin" className="animate-spin w-10 h-10" />
        </div>
      )}
      <div className={`${spinning ? "opacity-50" : "opacity-100"} relative z-0`}>{children}</div>
    </div>
  );
};

export default Spin;
