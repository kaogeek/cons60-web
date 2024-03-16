import React from "react";

function ListItem({ title, count, chartColor }) {
  
  const createChart = () => {
    let boxes = [];
    for (let i = 0; i < count; i++) {
      boxes.push(
        <div className="w-2 h-4" style={{ backgroundColor: chartColor }}></div>
      );
    }
    // Create static list to avoid warning from React
    const staticList = (...children) =>
      React.createElement(React.Fragment, {}, ...children);
    return (
      <div className="flex gap-1 w-full flex-wrap">{staticList(...boxes)}</div>
    );
  };
  
  const getTitle = t => {
    if (t.includes('|')) {
      const tArr = t.split('|');
      return (
        <>
          {tArr[0]}
          <br className="sm:hidden" />
          <span className="text-base"> {tArr[1]}</span>
        </>
      );
    } else {
      return t;
    }
  };

  return (
    <div
      className="flex flex-col rounded-2xl px-6 py-4 
                 gap-4 text-xl font-bold w-full block-lighter"
    >
      <div className="flex flex-row  justify-between">
        <div className="text-subheader">
          {getTitle(title)}
        </div>
        <div>
          {count} <span className="text-base font-normal">ครั้ง</span>
        </div>
      </div>
      {createChart()}
    </div>
  );
}

export default ListItem;
