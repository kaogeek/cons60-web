import React from "react";
import { Link, useParams } from "react-router-dom";
import { Icon } from "@iconify/react";
import "../components/ProfileImages.jsx";
import data from "../c60-data-query/data.js";
import { useState, useEffect } from "react";
import { chapterIdToName, chapterNameToId } from "../../src/constants/chapters.js"

import createDataObject from "../c60-data-query/data-object.js";

export default function Search({ searchInputValue, setSearchInputValue }) {
    const [searchInput, setSearchInput] = useState([]);
    const [articleResult, setArticleResult] = useState([]);
    const [discussionistResult, setDiscussionistResult] = useState('');

    // function get List of article name from json
    const getArticleList = (data) => {
        const articleList = data.map((article) => article["ชื่อมาตรา"]);
        return articleList;
    };

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
        console.log(history);
        return history.slice(-10).reverse();;
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
                <div key={index} className="border-b border-gray-500 flex items-center py-2" onClick={() => { changeTextInput(item) }}>
                    <div className="pr-2">
                        <Icon icon="material-symbols:history" className="text-2xl" />
                    </div>
                    <span>{item}</span>
                </div>
            );
        });
    }

    // Check input type num?
    const isNumeric = (value) => {
        return /^-?\d+$/.test(value);
    }

    const renderArticleResult = () => {
        if (!articleResult || articleResult.length === 0) {
            return <div className="text-gray-400 pt-2">ไม่พบข้อมูล</div>;
        }
        return articleResult.map((item, index) => {
            return (
                <Link
                    to={"/section/" + item}
                    onClick={() => saveHistory(searchInputValue)}
                    key={index}
                    className="border-b border-gray-500 flex items-center py-2"
                >
                    <div className="pr-2">
                        <Icon icon="bx:bx-book" className="text-2xl" />
                    </div>
                    <span>{item}</span>
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
                    className="border-b border-gray-500 flex items-center py-2"
                >
                    <div className="pr-2">
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

        if (searchInput) {
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
            setArticleResult([...new Set(articleSearch.data.map(obj => (isNumeric(obj.มาตรา) ? "มาตรา " : "") + obj.มาตรา + " ("+(isNumeric(obj.หมวด) ? "หมวด  " + obj.หมวด + " " : "") + chapterIdToName[obj.หมวด] + ")"))].filter(value => value !== "").splice(0, 5));
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
        <div data-testid="search">
            <div className="bg-[#310] h-screen">
                <div className="bg-[#310] max-w-screen-md mx-auto text-xl text-white pt-4" >

                    {searchInputValue ? (
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
                    ) : (
                        <div>
                            <h4 className="text-header">ประวัติการค้นหา</h4>
                            {renderHistory()}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
