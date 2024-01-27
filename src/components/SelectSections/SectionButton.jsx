import { Icon } from "@iconify/react";

import sectionColorCode from "../../constants/sectionColorCode";

function SectionButton({ section, selected, onClick }) {
  const activeStyle = "rounded-full text-black px-2";
  const inactiveStyle = "text-[#9f9f9f] px-4";

  return (
    <button
      className={`py-2 font-bold text-left w-full md:w-64 ${
        selected ? activeStyle : inactiveStyle
      }`}
      style={{
        backgroundColor: selected ? sectionColorCode[section] : "#131313",
      }}
      onClick={() => onClick(() => onClick())}
    >
      <div className="flex flex-row gap-2 items-center">
        {!selected ? (
          <div
            style={{
              backgroundColor: sectionColorCode[section],
              width: "16px",
              height: "16px",
              borderRadius: "50%",
              flexShrink: 0,
            }}
          ></div>
        ) : (
          <div className="bg-black rounded-full p-[8px]">
            <Icon icon="mingcute:check-fill" fontSize={"16px"} color="white"/>
          </div>
        )}
        <div className="text-ellipsis whitespace-nowrap overflow-hidden">
          {section}
        </div>
      </div>
    </button>
  );
}

export default SectionButton;
