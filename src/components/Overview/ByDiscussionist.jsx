import React, { useState } from "react";
import { Link } from "react-router-dom";

import ListItem from "../ListItem";
import sectionColorCode from "../../constants/sectionColorCode";
import SelectSections from "../SelectSections/SelectSections";
import PersonListItem from "../PersonListItem";

function ByDiscussionist() {
  const [selectedSections, setSelectedSections] = useState([]);

  const handleSelectSections = (newSelected) => {
    setSelectedSections(newSelected);
  };

  return (
    <div className="flex justify-center items-center">
      <div className="flex flex-row w-3/4 gap-4">
        <SelectSections
          selectedSections={selectedSections}
          onChange={handleSelectSections}
        />
        <div className="flex flex-col gap-4">
          <div className="flex flex-row justify-between flex-wrap gap-4">
            {selectedSections.length >= 1 ? (
              <div className="text-3xl font-bold">
                ได้เลือก {selectedSections.length} จากทั้งหมด
              </div>
            ) : (
              <div className="text-3xl font-bold">ทุกหมวด</div>
            )}
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
          <div className="flex flex-col justify-center items-center gap-2.5 w-full">
            <Link to="/นายมีชัย ฤชุพันธุ์" className="w-full">
              <PersonListItem
                name="นายมีชัย ฤชุพันธุ์"
                sectionCountMap={{
                  พระมหากษัตริย์: 30,
                  สิทธิและเสรีภาพของปวงชนชาวไทย: 20,
                  การปฏิรูปประเทศ: 20,
                }}
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ByDiscussionist;
