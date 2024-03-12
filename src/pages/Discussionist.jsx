import { Link, useParams } from "react-router-dom";
import React, { useState, useEffect, useCallback, useRef } from "react";
import { useMediaQuery } from "react-responsive";
import { Icon } from "@iconify/react";

import ChapterMobilePillButton from "../components/SelectChapters/ChapterMobilePillButton";
import SelectChaptersMobile from "../components/SelectChapters/SelectChaptersMobile";
import SelectChapters from "../components/SelectChapters/SelectChapters";
import ListItem from "../components/ListItem";
import chapterColorCode from "../constants/chapterColorCode.js";
import SortBy from "../components/SortBy";

import createDataObject from "../c60-data-query/data-object.js";
import data from "../c60-data-query/data.js";
import { chapterIdToName, chapterNameToId } from "../constants/chapters.js";
import isNumeric from "../utils/isNumeric.js";

export default function Discussionist() {
  const { name } = useParams();

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
    const chapterIds = selectedChapters.map((chapter) => ({
      หมวด: chapterNameToId[chapter],
    }));

    const dataObject =
      selectedChapters.length >= 1
        ? createDataObject(data)
            .multiFilter(chapterIds, [])
            .filterArray("ผู้อภิปราย", name)
        : createDataObject(data).filterArray("ผู้อภิปราย", name);

    const newResult = dataObject.data.reduce((acc, row) => {
      const chapterName = chapterIdToName[row["หมวด"]];
      const SectionNumber = row["มาตรา"];

      if (!acc[SectionNumber]) {
        acc[SectionNumber] = {};
        acc[SectionNumber]["total"] = 1;
      } else {
        acc[SectionNumber]["total"] += 1;
      }
      acc[SectionNumber]["chapterName"] = chapterName;
      return acc;
    }, {});

    // Convert to array for sorting later
    // [name, {chapterName, total}]
    return Object.entries(newResult);
  }, [name, selectedChapters]);

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
      <div className="bg-[#310]">
        <div className="max-w-screen-xl h-16 mx-auto px-4 flex gap-5 items-center">
          <Link to="/">
            <svg
              width="33"
              height="33"
              viewBox="0 0 33 33"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M21.7858 8.79072L14.1899 16.7819L21.8189 24.8062C22.0326 25.0343 22.1496 25.3363 22.1454 25.6488C22.1412 25.9613 22.016 26.26 21.7962 26.4822C21.6931 26.5858 21.5703 26.6677 21.435 26.7229C21.2997 26.7781 21.1547 26.8055 21.0086 26.8036C20.8625 26.8017 20.7183 26.7704 20.5845 26.7116C20.4507 26.6529 20.3301 26.5678 20.2298 26.4615L12.6069 18.4455L11.0344 16.7902L12.6152 15.1348L20.2236 7.12296C20.3266 7.01987 20.4492 6.9385 20.5842 6.88368C20.7192 6.82886 20.8638 6.8017 21.0095 6.80383C21.1552 6.80595 21.299 6.8373 21.4324 6.89603C21.5657 6.95476 21.6859 7.03967 21.7858 7.14572C21.9958 7.36811 22.1128 7.66237 22.1128 7.96822C22.1128 8.27407 21.9958 8.56834 21.7858 8.79072Z"
                fill="#cb6"
              />
            </svg>
          </Link>
          <h1 className="text-header text-3xl">{name}</h1>
        </div>
      </div>
      <div
        className="bg-[#310] py-4 md:py-8  min-h-screen flex justify-center items-center"
        ref={resultDivRef}
      >
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
                    <div className="text-3xl font-bold">
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
