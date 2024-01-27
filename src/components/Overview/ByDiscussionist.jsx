import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import SelectSections from "../SelectSections/SelectSections";
import PersonListItem from "../PersonListItem";

import createDataObject from "../../c60-data-query/data-object.js";
import data from "../../c60-data-query/data.js";
import { sectionIdToName } from "../../constants/sections.js";

function ByDiscussionist() {
  const [selectedSections, setSelectedSections] = useState(["บททั่วไป"]);
  const [result, setResult] = useState({});

  const handleSelectSections = (newSelected) => {
    setSelectedSections(newSelected);
  };

  useEffect(() => {
    const dataObject = createDataObject(data.doc);

    // No section selected, query all
    const sectionQuery =
      selectedSections.length === 0
        ? dataObject.data
        : dataObject.data.filter((row) =>
            selectedSections.includes(sectionIdToName[row["หมวด"]])
          );

    const newResult = sectionQuery.reduce((acc, row) => {
      const sectionName = sectionIdToName[row["หมวด"]];
      const discussionists = row["ผู้อภิปราย"];
      discussionists.forEach((discussionist) => {
        if (!acc[discussionist]) {
          acc[discussionist] = {};
          acc[discussionist][sectionName] = 1;
        } else {
          if (!acc[discussionist][sectionName]) {
            acc[discussionist][sectionName] = 1;
          } else {
            acc[discussionist][sectionName] += 1;
          }
        }
      });
      return acc;
    }, {});

    setResult(newResult);
  }, [selectedSections]);

  return (
    <div className="flex justify-center items-center">
      <div className="flex flex-row w-3/4 gap-4">
        <SelectSections
          selectedSections={selectedSections}
          onChange={handleSelectSections}
        />
        <div className="flex flex-col gap-4 w-full">
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
            {Object.keys(result).map((discussionist) => (
              <Link
                to={`/${discussionist}`}
                className="w-full"
                key={discussionist}
              >
                <PersonListItem
                  name={discussionist}
                  sectionCountMap={result[discussionist]}
                />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ByDiscussionist;
