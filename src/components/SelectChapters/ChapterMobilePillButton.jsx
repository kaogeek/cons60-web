import { Icon } from "@iconify/react";

import chapterColorCode from "../../constants/chapterColorCode";

function ChapterMobilePillButton({ chapter, wording, remove }) {
  return (
    <div className="bg-[#2A2A2A] rounded-full py-2 px-2">
      <div className="flex justify-between gap-1 items-center">
        <div
          style={{
            backgroundColor: chapterColorCode[chapter],
            width: "16px",
            height: "16px",
            borderRadius: "50%",
            flexShrink: 0,
          }}
        ></div>
        <div className="flex-auto text-sm">{wording}</div>
        <button onClick={() => remove(chapter)}>
          <Icon icon="line-md:close" style={{ fontSize: "16px" }}></Icon>
        </button>
      </div>
    </div>
  );
}

export default ChapterMobilePillButton;
