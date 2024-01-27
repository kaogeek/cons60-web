import { Icon } from "@iconify/react";

import sectionColorCode from "../../constants/sectionColorCode";

function SectionMobilePillButton({ section, remove }) {
  return (
    <div className="bg-[#2A2A2A] rounded-full py-2 px-2">
      <div className="flex justify-between gap-1 items-center">
        <div
          style={{
            backgroundColor: sectionColorCode[section],
            width: "16px",
            height: "16px",
            borderRadius: "50%",
            flexShrink: 0,
          }}
        ></div>
        <div className="flex-auto text-sm">{section}</div>
        <button onClick={() => remove(section)}>
          <Icon icon="line-md:close" style={{ fontSize: "16px" }}></Icon>
        </button>
      </div>
    </div>
  );
}

export default SectionMobilePillButton;
