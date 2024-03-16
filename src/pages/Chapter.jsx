import { Link, useParams, useLocation } from "react-router-dom";
import React, { useState, useEffect, useRef } from "react";
import { useMediaQuery } from "react-responsive";
import { Icon } from "@iconify/react";

import DiscussionistMobilePillButton from "../components/SelectDiscussionists/DiscussionistMobilePillButton";
import SelectDiscussionistsMobile from "../components/SelectDiscussionists/SelectDiscussionistsMobile";
import SelectDiscussionists from "../components/SelectDiscussionists/SelectDiscussionists";
import ListItem from "../components/ListItem";
import SortBy from "../components/SortBy";
import Footer from "../components/Footer";

import createDataObject from "../c60-data-query/data-object.js";
import data from "../c60-data-query/data.js";
import chapterColorCode from "../constants/chapterColorCode.js";
import { chapterNameToId } from "../constants/chapters.js";
import isNumeric from "../utils/isNumeric.js";

export default function Chapter() {

  const {state} = useLocation();
  const {name} = useParams();
  const id = chapterNameToId[name];
  const [discussionists, setDiscussionists] = useState([]);

  const [sort, setSort] = useState(0);
  const [selectedDiscussionists, setSelectedDiscussionists] = useState([]);
  const [result, setResult] = useState([]);

  // Mobile
  const isMobile = useMediaQuery({ query: `(max-width: 768px)` });
  const [showSelectDiscussionists, setShowSelectDiscussionists] =
    useState(false);

  const resultDivRef = useRef(null);

  const handleSelectDiscussionists = (newSelected) => {
    setSelectedDiscussionists(newSelected);
  };

  const handleSelectModalClose = () => {
    setShowSelectDiscussionists(false);
    if (resultDivRef && resultDivRef.current) {
      resultDivRef.current.scrollIntoView();
    }
  };

  const handleRemoveDiscussionists = (discussionist) => {
    setSelectedDiscussionists((prev) =>
      prev.filter((s) => s !== discussionist)
    );
  };

  const queryData = (fullDiscussionists) => {
    const discussionistCriteria =
      selectedDiscussionists.length >= 1
        ? selectedDiscussionists.map((discussionist) => ({
            ผู้อภิปราย: discussionist,
          }))
        : fullDiscussionists.map((discussionist) => ({
            ผู้อภิปราย: discussionist["ผู้อภิปราย"],
          }));

    const dataObject = createDataObject(data)
      .filter("หมวด", chapterNameToId[name])
      .multiFilter(discussionistCriteria, [])
      .list("มาตรา").data;

    const sorted = dataObject.sort((a, b) =>
      sort === 0 ? b.count - a.count : a.count - b.count
    );
    return sorted;
  };

  useEffect(() => {
    const panelists = createDataObject(data)
      .filter("หมวด", chapterNameToId[name])
      .listPanelists().data;

    setDiscussionists(panelists);
    setResult(queryData(panelists));
  }, [sort, selectedDiscussionists, name]);

  return (
    <>
      <div className="bg-[#310]">
        <div className="max-w-screen-xl h-16 mx-auto px-4">
          <h1 className="text-header text-2xl sm:text-3xl truncate" style={{ lineHeight: '64px' }}>
            <button value="back" onClick={() => state?.backable ? window.history.back() : window.location.hash = '/'} className="inline-block h-16 pr-2">
              <svg className="inline" width="33" height="33" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill="#cb6" d="M21.7858 8.79072L14.1899 16.7819L21.8189 24.8062C22.0326 25.0343 22.1496 25.3363 22.1454 25.6488C22.1412 25.9613 22.016 26.26 21.7962 26.4822C21.6931 26.5858 21.5703 26.6677 21.435 26.7229C21.2997 26.7781 21.1547 26.8055 21.0086 26.8036C20.8625 26.8017 20.7183 26.7704 20.5845 26.7116C20.4507 26.6529 20.3301 26.5678 20.2298 26.4615L12.6069 18.4455L11.0344 16.7902L12.6152 15.1348L20.2236 7.12296C20.3266 7.01987 20.4492 6.9385 20.5842 6.88368C20.7192 6.82886 20.8638 6.8017 21.0095 6.80383C21.1552 6.80595 21.299 6.8373 21.4324 6.89603C21.5657 6.95476 21.6859 7.03967 21.7858 7.14572C21.9958 7.36811 22.1128 7.66237 22.1128 7.96822C22.1128 8.27407 21.9958 8.56834 21.7858 8.79072Z" />
              </svg>
            </button>
            หมวด {id} {name}
          </h1>
        </div>
      </div>
      <div className="bg-[#310] py-4 md:py-8  min-h-screen flex justify-center">
        <div className="w-11/12 md:w-5/6 lg:w-3/4 flex flex-row gap-4">
          {isMobile ? null : (
            <SelectDiscussionists
              selectedDiscussionists={selectedDiscussionists}
              onChange={handleSelectDiscussionists}
              discussionists={discussionists.map((d) => d["ผู้อภิปราย"])}
            />
          )}
          <div className="flex flex-col gap-4 w-full">
            <div className="flex flex-col md:flex-row justify-between flex-wrap gap-4">
              {isMobile ? (
                <div className="flex flex-col w-full gap-1">
                  <button
                    className="mx-auto py-4 flex justify-center gap-2 w-max text-2xl md:text-3xl font-bold text-header"
                    onClick={() => setShowSelectDiscussionists(true)}
                  >
                    {selectedDiscussionists.length >= 1
                      ? "กรองข้อมูลจาก " + selectedDiscussionists.length + " ผู้อภิปราย"
                      : "ข้อมูลจากผู้อภิปรายทุกคน"}
                    <Icon
                      style={{ fontSize: "32px" }}
                      icon="gridicons:dropdown"
                    ></Icon>
                  </button>
                  <div className="w-full flex flex-wrap gap-2 justify-center">
                    {selectedDiscussionists.map((discussionist) => (
                      <DiscussionistMobilePillButton
                        discussionist={discussionist}
                        remove={handleRemoveDiscussionists}
                      />
                    ))}
                  </div>
                </div>
              ) : (
                <>
                  {selectedDiscussionists.length >= 1 ? (
                    <div className="text-3xl font-bold text-header">
                      กรองข้อมูลจาก {selectedDiscussionists.length} ผู้อภิปราย
                    </div>
                  ) : (
                    <div className="text-3xl font-bold text-header">
                      ข้อมูลจากผู้อภิปรายทุกคน
                    </div>
                  )}
                </>
              )}
              <SortBy sort={sort} setSort={setSort} />
            </div>
            <div className="flex flex-col justify-center items-center gap-2.5 w-full">
              {result.map(({ มาตรา, count }) => (
                <Link to={`/section/${มาตรา}`} className="w-full" key={มาตรา} state={{ backable: true }}>
                  <ListItem
                    key={มาตรา}
                    title={isNumeric(มาตรา) ? `มาตรา ${มาตรา}` : มาตรา}
                    count={count}
                    chartColor={chapterColorCode[name]}
                  />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
      {showSelectDiscussionists && isMobile ? (
        <SelectDiscussionistsMobile
          selectedDiscussionists={selectedDiscussionists}
          onChange={handleSelectDiscussionists}
          close={handleSelectModalClose}
          discussionists={discussionists.map((d) => d["ผู้อภิปราย"])}
        />
      ) : null}
      <Footer />
    </>
  );
}
