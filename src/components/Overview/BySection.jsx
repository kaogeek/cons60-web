import { Link } from "react-router-dom";

import ListItem from "../ListItem";
import sectionColorCode from "../../constants/sectionColorCode";

function BySection() {
  return (
    <div className="flex justify-center items-center">
    <div className="w-3/4 flex flex-col gap-4">
      <div className="flex flex-row justify-between flex-wrap gap-4">
        <div className="text-3xl font-bold">ทุกหมวด</div>
        <div className="">
          <div className="bg-neutral-900 rounded-full py-2 px-2">
            <select
              name="mainsorts"
              id="mainsorts"
              className="bg-neutral-900 rounded-full"
            >
              <option value="ascendingedit">
                เรียงตามมาตราที่แก้ไขมาก-น้อย
              </option>
              <option value="decendingedit">
                เรียงตามมาตราที่แก้ไขน้อย-มาก
              </option>
              <option value="ascendingdiscuss">
                เรียงตามผู้อภิปรายมาก-น้อย
              </option>
              <option value="decendingdiscuss">
                เรียงตามผู้อภิปรายน้อย-มาก
              </option>
            </select>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center gap-2.5 w-full">
        <Link to="/บทเฉพาะกาล" className="w-full">
          <ListItem
            title="บทเฉพาะกาล"
            count={100}
            chartColor={sectionColorCode["บทเฉพาะกาล"]}
          />
        </Link>
        <Link to="/การปฏิรูปประเทศ" className="w-full">
          <ListItem
            title="การปฏิรูปประเทศ"
            count={85}
            chartColor={sectionColorCode["การปฏิรูปประเทศ"]}
          />
        </Link>
      </div>
    </div>
  </div>
  );
}

export default BySection;