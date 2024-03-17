import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Icon } from "@iconify/react";
import "../components/ProfileImages.jsx";
import data from "../c60-data-query/data.js";
import { useState, useEffect } from "react";
import { chapterIdToName } from "../../src/constants/chapters.js";
import createDataObject from "../c60-data-query/data-object.js";
import isNumeric from "../utils/isNumeric.js";

export default function Search({ searchInputValue, setSearchInputValue }) {
  
    const {state} = useLocation();
    const [searchInput, setSearchInput] = useState([]);
    const [articleResult, setArticleResult] = useState([]);
    const [discussionistResult, setDiscussionistResult] = useState('');

    function extractNumbersFromString(text) {
        // Use a regular expression to match numbers in the text
        const numbers = text.match(/\d+/g);

        // Check if numbers were found
        if (numbers) {
            // Convert the matched strings to actual numbers
            const numericValues = numbers.map(Number);

            return numericValues;
        } else {
            return [];
        }
    }

    // save history of search to local storage
    const saveHistory = (searchInputValue) => {
        const history = JSON.parse(localStorage.getItem("history")) || [];
        const updatedHistory = history.filter((item) => item !== searchInputValue).concat(searchInputValue);
        localStorage.setItem("history", JSON.stringify(updatedHistory));
    }

    // get last 10 history of search from local storage
    const getHistory = () => {
        const history = JSON.parse(localStorage.getItem("history")) || [];
        return history.slice(-10).toReversed();;
    }


    function sortAndExtractUniqueByFrequency(arr) {
        // Step 1: Find item frequencies
        const frequencyMap = {};
        for (const item of arr) {
            frequencyMap[item] = (frequencyMap[item] || 0) + 1;
        }

// Step 2: Sort by frequency (descending order)
        const sortedItems = Object.entries(frequencyMap).sort(([, countA], [, countB]) => countB - countA);

        // Step 3: Extract unique items
        const uniqueItems = sortedItems.map(([item]) => item);

        return uniqueItems;
    }


    // render history of search
    const renderHistory = () => {
        const history = getHistory();
        if (history.length === 0) return (<div className="text-gray-400 pt-2">ไม่มีประวัติการค้นหา</div>);
        return history.map((item, index) => {
            return (
                <div key={index} className="border-b border-gray-500 flex items-top py-2" onClick={() => { changeTextInput(item) }}>
                    <div className="pr-2 pt-1">
                        <Icon icon="material-symbols:history" className="text-2xl" />
                    </div>
                    <span>{item}</span>
                </div>
            );
        });
    }

    const renderArticleResult = () => {
        if (!articleResult || articleResult.length === 0) {
            return <div className="text-gray-400 pt-2">ไม่พบข้อมูล</div>;
        }
        return articleResult.map((item, index) => {
            const [section, chapter] = item[1].split('|');
            return (
                <Link
                    to={"/section/" + item[0]}
                    onClick={() => saveHistory(searchInputValue)}
                    key={index}
                    state={{ backable: true }}
                    className="border-b border-gray-500 flex item-top sm:items-top py-2"
                >
                    <div className="pr-2 pt-1">
                        <Icon icon="bx:bx-book" className="text-2xl" />
                    </div>
                    <div>{section} <br className="sm:hidden" /> <span className="text-base">{chapter}</span></div>
                </Link>
            );
        });
    }

    const renderDiscussionistResult = () => {
        if (!discussionistResult || discussionistResult.length === 0) {
            return <div className="text-gray-400 pt-2">ไม่พบข้อมูล</div>;
        }
        return discussionistResult.map((item, index) => {
            return (
                <Link
                    to={"/discussionist/" + item}
                    onClick={() => saveHistory(searchInputValue)}
                    key={index}
                    state={{ backable: true }}
                    className="border-b border-gray-500 flex items-top py-2"
                >
                    <div className="pr-2 pt-1">
                        <Icon icon="bx:bx-user" className="text-2xl" />
                    </div>
                    <span>{item}</span>
                </Link>
            );
        });
    }



    const changeTextInput = (message) => {
        const searchInput = document.getElementById('search-input');
        setSearchInput(message);
        setSearchInputValue(message)

        if (searchInput.value !== message) {
            // Update the value directly using DOM manipulation
            searchInput.value = message;
        }
    };

    useEffect(() => {
        if (searchInputValue.trim() === "") {
            setArticleResult([]);
            setDiscussionistResult([]);
        } else {
            const articleSearch = createDataObject(data).filter('มาตรา', extractNumbersFromString(searchInputValue))
                .append(createDataObject(data).search('มาตรา', searchInputValue))
                .append(createDataObject(data).search('ผู้อภิปราย', searchInputValue))
                .append(createDataObject(data).search('ประเด็นการพิจารณา', searchInputValue))
                .append(createDataObject(data).search('ร่างบทบัญญัติ', searchInputValue))
            setArticleResult([...new Set(articleSearch.data.map(obj => [obj.มาตรา, (isNumeric(obj.มาตรา) ? "มาตรา " : "") + obj.มาตรา + "|("+(isNumeric(obj.หมวด) ? "หมวด  " + obj.หมวด + " " : "") + chapterIdToName[obj.หมวด] + ")"]))].filter(value => value[1] !== "").splice(0, 5));
            // discussionist
            // search by name
            let discussionistNameSearch = [...new Set(createDataObject(data)
                .data
                .map(obj => obj.ผู้อภิปราย)
                .flat())]
                .filter(item => item.includes(searchInputValue));

            // search by others
            let discussionistOthersSearch = sortAndExtractUniqueByFrequency(createDataObject(data).search('มาตรา', searchInputValue)
                .append(createDataObject(data).search('ประเด็นการพิจารณา', searchInputValue))
                .append(createDataObject(data).search('ร่างบทบัญญัติ', searchInputValue))
                .data
                .map(obj => obj.ผู้อภิปราย)
                .flat());

            setDiscussionistResult([...new Set(discussionistNameSearch.concat(discussionistOthersSearch))].filter(value => value !== "").splice(0, 5));
        }

    }, [searchInputValue, searchInput]);
        
    
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
              ค้นหา
            </h1>
          </div>
        </div>
        <div data-testid="search">
          <div className="bg-[#310] h-screen">
            <div className="bg-[#310] w-11/12 md:w-5/6 lg:w-3/4 mx-auto min-h-screen mx-auto text-xl text-white pt-4" >

              { searchInputValue ? (
                <div>
                  <h4 className="text-header">
                    ค้นหาตามมาตรา
                  </h4>

                  {renderArticleResult()}

                  <h4 className="pt-4 text-header">
                    ค้นหาตามผู้อภิปราย
                  </h4>

                  {renderDiscussionistResult()}
                </div>
              ) : getHistory().length ? (
                <div>
                  <h4 className="text-header">ประวัติการค้นหา</h4>
                  {renderHistory()}
                </div>
              ) : '' }
              
            </div>
          </div>
        </div>
      </>
    );
}
