import React from "react";
import sectionColorCode from "../constants/sectionColorCode";
import ProfileImages from "./ProfileImages";

function PersonListItem(props) {
  const { name, sectionCountMap } = props;

  const createChart = () => {
    let boxes = [];
    for (const [key, value] of Object.entries(sectionCountMap)) {
      for (let i = 0; i < value; i++) {
        if (key === "total") continue;
        boxes.push(
          <div
            className="w-2 h-4"
            style={{ backgroundColor: sectionColorCode[key] }}
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
      className="flex flex-col bg-[#2a2a2a] rounded-2xl px-8 py-4 
    gap-4 text-xl font-bold w-full"
    >
      <div className="flex flex-row  justify-between">
        <div className="flex items-center gap-4">
          <ProfileImages
            size={"40px"}
            imageUrl={
              "https://mpics.mgronline.com/pics/Images/558000011197301.JPEG"
            }
          />
          <div>{name}</div>
        </div>
        <div>
          {sectionCountMap.total}{" "}
          <span className="text-base font-normal">ครั้ง</span>
        </div>
      </div>
      {createChart()}
    </div>
  );
}

export default PersonListItem;
