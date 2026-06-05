import clsx from "clsx";

import Icon from "../Icon/Icon";

const Btn = ({ children, svgSrc = "", isBtnActive = false }) => {
  return (
    <button
      type="button"
      className={clsx([
        "group flex-center h-9.5 min-w-32 cursor-pointer gap-2 rounded-full p-1 pl-2 transition-colors duration-300",
        isBtnActive
          ? "bg-caramel hover:bg-[#A17052]"
          : "bg-cream/80 hover:bg-caramel",
      ])}
    >
      <span className="flex-center size-full rounded-full bg-white p-0.5 text-sm font-bold text-caramel transition-colors duration-300">
        {children}
      </span>
      <Icon
        src={svgSrc}
        className={clsx([
          "size-9 transition-colors duration-300",
          isBtnActive ? "text-white" : "text-[#A2928B] group-hover:text-white",
        ])}
      />
    </button>
  );
};

export default Btn;
