import React, { useState, useEffect, useCallback, useRef } from "react";
import { Link } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import { Icon } from "@iconify/react";

import SectionMobilePillButton from "../SelectSections/SectionMobilePillButton.jsx";
import SelectSectionsMobile from "../SelectSections/SelectSectionsMobile";
import SelectSections from "../SelectSections/SelectSections";
import ListItem from "../ListItem";
import sectionColorCode from "../../constants/sectionColorCode";
import SortBy from "../SortBy";

import createDataObject from "../../c60-data-query/data-object.js";
import data from "../../c60-data-query/data.js";
import { sectionIdToName } from "../../constants/sections";

function ByArticle() {
  const [sort, setSort] = useState(0);
  const [selectedSections, setSelectedSections] = useState([]);
  const [result, setResult] = useState([]);

  // Mobile
  const isMobile = useMediaQuery({ query: `(max-width: 768px)` });
  const [showSelectSections, setShowSelectSections] = useState(false);

  const resultDivRef = useRef(null);

  const handleSelectSections = (newSelected) => {
    setSelectedSections(newSelected);
  };

  const handleSectionsModalClose = () => {
    setShowSelectSections(false);
    if (resultDivRef && resultDivRef.current) {
      resultDivRef.current.scrollIntoView();
    }
  };

  const handleRemoveSection = (section) => {
    setSelectedSections((prev) => prev.filter((s) => s !== section));
  };

  const queryData = useCallback(() => {
    const dataObject = createDataObject(data);

    // No section selected, query all
    const filteredBySectionData =
      selectedSections.length === 0
        ? dataObject.data
        : dataObject.data.filter((row) =>
            selectedSections.includes(sectionIdToName[row["หมวด"]])
          );

    const newResult = filteredBySectionData.reduce((acc, row) => {
      const sectionName = sectionIdToName[row["หมวด"]];
      const articleNumber = row["มาตรา"];

      if (!acc[articleNumber]) {
        acc[articleNumber] = {};
        acc[articleNumber]["total"] = 1;
      } else {
        if (!acc[articleNumber]["total"]) {
          acc[articleNumber]["total"] = 1;
        } else {
          acc[articleNumber]["total"] += 1;
        }
      }
      acc[articleNumber]["sectionName"] = sectionName;
      return acc;
    }, {});

    // Convert to array for sorting later
    // [name, {sectionName, total}]
    return Object.entries(newResult);
  }, [selectedSections]);

  const sortResult = useCallback(
    (result) => {
      return result.sort((a, b) =>
        sort === 0 ? b[1].total - a[1].total : a[1].total - b[1].total
      );
    },
    [sort]
  );

  useEffect(() => {
    const editRecord = queryData();
    const sortedEditRecord = sortResult(editRecord);
    setResult(sortedEditRecord);
  }, [queryData, sortResult]);

  return (
    <>
      <div className="flex justify-center items-center" ref={resultDivRef}>
        <div className="flex flex-row w-3/4 gap-4">
          {isMobile ? null : (
            <SelectSections
              selectedSections={selectedSections}
              onChange={handleSelectSections}
            />
          )}
          <div className="flex flex-col gap-4 w-full">
            <div className="flex flex-col md:flex-row justify-between flex-wrap gap-4">
              {isMobile ? (
                <div className="flex flex-col w-full gap-1">
                  <button
                    className="py-4 flex justify-center gap-2 w-max text-lg font-bold"
                    onClick={() => setShowSelectSections(true)}
                  >
                    {selectedSections.length >= 1
                      ? "เลือก " + selectedSections.length + " หมวด"
                      : "ทุกหมวด"}
                    <Icon
                      style={{ fontSize: "32px" }}
                      icon="gridicons:dropdown"
                    ></Icon>
                  </button>
                  <div className="w-full flex flex-wrap gap-2">
                    {selectedSections.map((section) => (
                      <SectionMobilePillButton
                        section={section}
                        remove={handleRemoveSection}
                      />
                    ))}
                  </div>
                </div>
              ) : (
                <>
                  {selectedSections.length >= 1 ? (
                    <div className="text-3xl font-bold">
                      ได้เลือก {selectedSections.length} จากทั้งหมด
                    </div>
                  ) : (
                    <div className="text-3xl font-bold">ทุกหมวด</div>
                  )}
                </>
              )}
              <SortBy sort={sort} setSort={setSort} />
            </div>
            <div className="flex flex-col justify-center items-center gap-2.5 w-full">
              {result.map(([article, { sectionName, total }]) => (
                <Link
                  to={`/section/${article}`}
                  className="w-full"
                  key={article}
                >
                  <ListItem
                    title={`มาตรา ${article}`}
                    count={total}
                    chartColor={sectionColorCode[sectionName]}
                  />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
      {showSelectSections && isMobile ? (
        <SelectSectionsMobile
          selectedSections={selectedSections}
          onChange={handleSelectSections}
          close={handleSectionsModalClose}
        />
      ) : null}
    </>
  );
}

export default ByArticle;
