import React from "react";
import chapterColorCode from "../constants/chapterColorCode";

function PersonListItem(props) {
  const { name, chapterCountMap } = props;

  const createChart = () => {
    let boxes = [];
    for (const [key, value] of Object.entries(chapterCountMap)) {
      for (let i = 0; i < value; i++) {
        if (key === "total") continue;
        boxes.push(
          <div
            className="w-2 h-4"
            style={{ backgroundColor: chapterColorCode[key] }}
          ></div>
        );
      }
    }
    // Create static list to avoid warning from React
    const staticList = (...children) =>
      React.createElement(React.Fragment, {}, ...children);
    return (
      <div className="flex gap-1 w-full flex-wrap">{staticList(...boxes)}</div>
    );
  };

  return (
    <div
      className="flex flex-col bg-[#2a2a2a] rounded-2xl px-6 py-4 
    gap-4 text-xl font-bold w-full block-lighter"
    >
      <div className="flex flex-row  justify-between">
        <div className="flex items-center gap-4 text-subheader">
          <div>{name}</div>
        </div>
        <div>
          {chapterCountMap.total}{" "}
          <span className="text-base font-normal">ครั้ง</span>
        </div>
      </div>
      {createChart()}
    </div>
  );
}

export default PersonListItem;
