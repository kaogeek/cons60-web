import React from "react";
import { Icon } from "@iconify/react";
import "../components/ProfileImages.jsx";
import data from "../c60-data-query/data.js";
import { useState, useEffect } from "react";

import createDataObject from "../c60-data-query/data-object.js";

export default function Search({ searchInputValue }) {

    const [articleResult, setArticleResult] = useState('');

    // function get List of article name from json
    const getArticleList = (data) => {
        const articleList = data.map((article) => article["ชื่อมาตรา"]);
        return articleList;
    };

    // save history of search to local storage
    const saveHistory = (searchInputValue) => {
        const history = JSON.parse(localStorage.getItem("history")) || [];
        history
            .filter((item) => item !== searchInputValue)
            .push(searchInputValue);
        localStorage.setItem("history", JSON.stringify(history));
    }

    // get history of search from local storage
    const getHistory = () => {
        const history = JSON.parse(localStorage.getItem("history")) || [];
        return history;
    }

    // render history of search
    const renderHistory = () => {
        const history = getHistory();
        return history.map((item, index) => {
            return (
                <div key={index} className="border-b border-gray-500 flex items-center">
                    <div className="pr-2">
                        <Icon icon="material-symbols:history" className="text-2xl" />
                    </div>
                    <span>{item}</span>
                </div>
            );
        });
    }

    useEffect(() => {
        const dataObject = createDataObject(data);
        const newResult = dataObject.filter('มาตรา', 2);
        console.log(articleResult);
        console.log(dataObject);
        console.log(newResult);
        console.log(getArticleList(newResult));
        setArticleResult(newResult);
    }, [searchInputValue]);




    return (
        <div data-testid="search">
            <div className="bg-[#1a1a1a] h-screen">
                <div className="max-w-screen-md mx-auto text-xl text-white pt-4" >


                    {searchInputValue ? (
                        <div>
                            <h4>
                                ค้นหาตามมาตรา
                            </h4>

                            <h4 className="pt-4">
                                ค้นหาตามผู้อภิปราย
                            </h4>
                        </div>
                    ) : (
                        <div className="">
                            <h4 className="pt-4">ประวัติการค้นหา</h4>
                            {renderHistory()}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
