import React, { useState, useEffect, useCallback, useRef } from "react";
import { Link } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import { Icon } from "@iconify/react";

import ChapterMobilePillButton from "../SelectChapters/ChapterMobilePillButton.jsx";
import SelectChaptersMobile from "../SelectChapters/SelectChaptersMobile";
import SelectChapters from "../SelectChapters/SelectChapters";
import ListItem from "../ListItem";
import chapterColorCode from "../../constants/chapterColorCode";
import SortBy from "../SortBy";

import createDataObject from "../../c60-data-query/data-object.js";
import data from "../../c60-data-query/data.js";
import { chapterIdToName } from "../../constants/chapters";
import isNumeric from "../../utils/isNumeric.js";

function BySection() {
  const [sort, setSort] = useState(0);
  const [selectedChapters, setSelectedChapters] = useState([]);
  const [result, setResult] = useState([]);

  // Mobile
  const isMobile = useMediaQuery({ query: `(max-width: 768px)` });
  const [showSelectChapters, setShowSelectChapters] = useState(false);

  const resultDivRef = useRef(null);

  const handleSelectChapters = (newSelected) => {
    setSelectedChapters(newSelected);
  };

  const handleChaptersModalClose = () => {
    setShowSelectChapters(false);
    if (resultDivRef && resultDivRef.current) {
      resultDivRef.current.scrollIntoView();
    }
  };

  const handleRemoveChapter = (chapter) => {
    setSelectedChapters((prev) => prev.filter((s) => s !== chapter));
  };

  const queryData = useCallback(() => {
    const dataObject = createDataObject(data);

    // No chapter selected, query all
    const filteredByChapterData =
      selectedChapters.length === 0
        ? dataObject.data
        : dataObject.data.filter((row) =>
            selectedChapters.includes(chapterIdToName[row["หมวด"]])
          );

    const newResult = filteredByChapterData.reduce((acc, row) => {
      const chapterName = chapterIdToName[row["หมวด"]];
      const SectionNumber = row["มาตรา"];

      if (!acc[SectionNumber]) {
        acc[SectionNumber] = {};
        acc[SectionNumber]["total"] = 1;
      } else {
        if (!acc[SectionNumber]["total"]) {
          acc[SectionNumber]["total"] = 1;
        } else {
          acc[SectionNumber]["total"] += 1;
        }
      }
      acc[SectionNumber]["chapterName"] = chapterName;
      return acc;
    }, {});

    // Convert to array for sorting later
    // [name, {chapterName, total}]
    return Object.entries(newResult);
  }, [selectedChapters]);

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
            <SelectChapters
              selectedChapters={selectedChapters}
              onChange={handleSelectChapters}
            />
          )}
          <div className="flex flex-col gap-4 w-full">
            <div className="flex flex-col md:flex-row justify-between flex-wrap gap-4">
              {isMobile ? (
                <div className="flex flex-col w-full gap-1">
                  <button
                    className="py-4 flex justify-center gap-2 w-max text-lg font-bold"
                    onClick={() => setShowSelectChapters(true)}
                  >
                    {selectedChapters.length >= 1
                      ? "เลือก " + selectedChapters.length + " หมวด"
                      : "ทุกหมวด"}
                    <Icon
                      style={{ fontSize: "32px" }}
                      icon="gridicons:dropdown"
                    ></Icon>
                  </button>
                  <div className="w-full flex flex-wrap gap-2">
                    {selectedChapters.map((chapter) => (
                      <ChapterMobilePillButton
                        chapter={chapter}
                        remove={handleRemoveChapter}
                      />
                    ))}
                  </div>
                </div>
              ) : (
                <>
                  {selectedChapters.length >= 1 ? (
                    <div className="text-3xl font-bold text-header">
                      ได้เลือก {selectedChapters.length} จากทั้งหมด
                    </div>
                  ) : (
                    <div className="text-3xl font-bold text-header">ทุกหมวด</div>
                  )}
                </>
              )}
              <SortBy sort={sort} setSort={setSort} />
            </div>
            <div className="flex flex-col justify-center items-center gap-2.5 w-full">
              {result.map(([Section, { chapterName, total }]) => (
                <Link
                  to={`/section/${Section}`}
                  className="w-full"
                  key={Section}
                >
                  <ListItem
                    title={isNumeric(Section) ? `มาตรา ${Section}` : Section}
                    count={total}
                    chartColor={chapterColorCode[chapterName]}
                  />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
      {showSelectChapters && isMobile ? (
        <SelectChaptersMobile
          selectedChapters={selectedChapters}
          onChange={handleSelectChapters}
          close={handleChaptersModalClose}
        />
      ) : null}
    </>
  );
}

export default BySection;
