function ListItem({ title, count, chartColor }) {
  const createChart = () => {
    let boxes = [];
    for (let i = 0; i < count; i++) {
      boxes.push(
        <div className="w-2 h-4" style={{ backgroundColor: chartColor }}></div>
      );
    }
    return <div className="flex gap-1 w-full flex-wrap">{boxes}</div>;
  };

  return (
    <div
      className="flex flex-col bg-neutral-500 rounded-2xl px-8 py-4 
    gap-4 text-xl font-bold w-full"
    >
      <div className="flex flex-row  justify-between">
        <div>{title}</div>
        <div>
          {count} <span className="text-base font-normal">ครั้ง</span>
        </div>
      </div>
      {createChart()}
    </div>
  );
}

export default ListItem;
