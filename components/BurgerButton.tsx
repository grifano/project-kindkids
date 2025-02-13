import { useState } from "react";

interface BurgerButtonProps {
  onClick: () => void;
}

const BurgerButton = ({ onClick }: BurgerButtonProps) => {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive(!isActive);
    onClick();
  };

  return (
    <div
      className={`flex cursor-pointer items-center justify-center ${isActive ? "active" : ""}`}
      onClick={handleClick}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="48"
        height="48"
        viewBox="0 0 200 200"
        className={`transition-transform duration-500 ease-in-out ${isActive ? "rotate-90" : ""}`}
      >
        <g strokeWidth="6.5" strokeLinecap="round">
          <path
            d="M72 82.286h28.75"
            fill="#009100"
            fillRule="evenodd"
            stroke="#fff"
            className="origin-[36%_40%] transition-all duration-500 ease-in-out"
            style={
              isActive
                ? { transform: "translateX(9px) translateY(1px) rotate(45deg)" }
                : {}
            }
          />
          <path
            d="M100.75 103.714l72.482-.143c.043 39.398-32.284 71.434-72.16 71.434-39.878 0-72.204-32.036-72.204-71.554"
            fill="none"
            stroke="#fff"
            className="transition-all duration-500 ease-in-out"
            style={
              isActive
                ? { strokeDasharray: "225 299", strokeDashoffset: "-72px" }
                : { strokeDasharray: "29 299" }
            }
          />
          <path
            d="M72 125.143h28.75"
            fill="#009100"
            fillRule="evenodd"
            stroke="#fff"
            className="origin-[35%_63%] transition-all duration-500 ease-in-out"
            style={
              isActive
                ? {
                    transform: "translateX(9px) translateY(1px) rotate(-45deg)",
                  }
                : {}
            }
          />
          <path
            d="M100.75 103.714l-71.908-.143c.026-39.638 32.352-71.674 72.23-71.674 39.876 0 72.203 32.036 72.203 71.554"
            fill="none"
            stroke="#fff"
            className="transition-all duration-500 ease-in-out"
            style={
              isActive
                ? { strokeDasharray: "225 299", strokeDashoffset: "-72px" }
                : { strokeDasharray: "29 299" }
            }
          />
          <path
            d="M100.75 82.286h28.75"
            fill="#009100"
            fillRule="evenodd"
            stroke="#fff"
            className="origin-[61%_52%] transition-all duration-500 ease-in-out"
            style={
              isActive
                ? {
                    transform: "translateX(9px) translateY(1px) rotate(-45deg)",
                  }
                : {}
            }
          />
          <path
            d="M100.75 125.143h28.75"
            fill="#009100"
            fillRule="evenodd"
            stroke="#fff"
            className="origin-[62%_52%] transition-all duration-500 ease-in-out"
            style={
              isActive
                ? { transform: "translateX(9px) translateY(1px) rotate(45deg)" }
                : {}
            }
          />
        </g>
      </svg>
    </div>
  );
};

export default BurgerButton;
