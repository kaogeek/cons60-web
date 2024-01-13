import sectionColorCode from "../constants/sectionColorCode";

function PersonListItem(props) {
  const { name, sectionCountMap } = props;

  const createChart = () => {
    let boxes = [];
    for (const [key, value] of Object.entries(sectionCountMap)) {
      for (let i = 0; i < value; i++) {
        boxes.push(
          <div
            className="w-2 h-4"
            style={{ backgroundColor: sectionColorCode[key] }}
          ></div>
        );
      }
    }
    return <div className="flex gap-1 w-full flex-wrap">{boxes}</div>;
  };

  const totalCount = () => {
    let total = 0;
    for (const [key, value] of Object.entries(sectionCountMap)) {
      total += value;
    }
    return total;
  };

  return (
    <div
      className="flex flex-col bg-[#2a2a2a] rounded-2xl px-8 py-4 
    gap-4 text-xl font-bold w-full"
    >
      <div className="flex flex-row  justify-between">
        <div>{name}</div>
        <div>
          {totalCount} <span className="text-base font-normal">ครั้ง</span>
        </div>
      </div>
      {createChart()}
    </div>
  );
}

export default PersonListItem;
