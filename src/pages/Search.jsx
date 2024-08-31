import React from "react";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";
import "../components/ProfileImages.jsx";
import data from "../c60-data-query/data.js";
import { useState, useEffect } from "react";
import { chapterIdToName } from "../../src/constants/chapters.js";
import createDataObject from "../c60-data-query/data-object.js";
import isNumeric from "../utils/isNumeric.js";
import ReactPaginate from 'react-paginate';

export default function Search({ searchInputValue, setSearchInputValue }) {
  
    const [searchInput, setSearchInput] = useState([]);
    const [articleResult, setArticleResult] = useState([]);
    const [discussionistResult, setDiscussionistResult] = useState('');
    const [articleResultShow, setArticleResultShow] = useState([]);
    const [discussionistResultShow, setDiscussionistResultShow] = useState('');
    let size = 0;
    let items = [];

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
                <button key={index} className="w-full border-b border-gray-500 flex items-top py-2" onClick={() => { changeTextInput(item) }}>
                    <div className="pr-2 pt-1">
                        <Icon icon="material-symbols:history" className="text-2xl" />
                    </div>
                    <span>{item}</span>
                </button>
            );
        });
    }

    function RenderArticleResult() {
      const [itemOffset, setItemOffset] = useState(0);
      const itemsPerPage = 5
      const endOffset = itemOffset + itemsPerPage;
      const currentItems = articleResult.slice(itemOffset, endOffset);
      const pageCount = Math.ceil(articleResult.length / itemsPerPage);

      const handlePageClick = (event) => {
        const newOffset = (event.selected * itemsPerPage) % articleResult.length;
        setItemOffset(newOffset);
      };

        if (!articleResult || articleResult.length === 0) {
            return <div className="text-gray-400 pt-2">ไม่พบข้อมูล</div>;
        }
        return <div>
          {currentItems.map((item, index) => {
            const [section, chapter] = item[1].split('|');
            return (
                <Link
                    to={"/section/" + item[0] + `/${searchInputValue}`}
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
        })}
          <div className="react-paginate" style={{display: 'flex', justifyContent: 'center', marginTop: '1em'}}>
              <ReactPaginate
                breakLabel="..."
                nextLabel="next >"
                onPageChange={handlePageClick}
                pageRangeDisplayed={5}
                pageCount={pageCount}
                previousLabel="< previous"
                renderOnZeroPageCount={null}
                breakClassName={'page-item'}
                breakLinkClassName={'page-link'}
                containerClassName={'pagination'}
                pageClassName={'page-item'}
                pageLinkClassName={'page-link'}
                previousClassName={'page-item'}
                previousLinkClassName={'page-link'}
                nextClassName={'page-item'}
                nextLinkClassName={'page-link'}
                activeClassName={'active'}
              />
            </div>
        </div>
    }

    function RenderDiscussionistResult(){
      const [itemOffset, setItemOffset] = useState(0);
      const itemsPerPage = 5
      const endOffset = itemOffset + itemsPerPage;
      const currentItems = discussionistResult.slice(itemOffset, endOffset);
      const pageCount = Math.ceil(discussionistResult.length / itemsPerPage);

      const handlePageClick = (event) => {
        const newOffset = (event.selected * itemsPerPage) % discussionistResult.length;
        setItemOffset(newOffset);
      };
        if (!discussionistResult || discussionistResult.length === 0) {
            return <div className="text-gray-400 pt-2">ไม่พบข้อมูล</div>;
        }
        return <div>
          {currentItems.map((item, index) => {
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
        })}
        <div className="react-paginate" style={{display: 'flex', justifyContent: 'center', marginTop: '1em'}}>
              <ReactPaginate
                breakLabel="..."
                nextLabel="next >"
                onPageChange={handlePageClick}
                pageRangeDisplayed={5}
                pageCount={pageCount}
                previousLabel="< previous"
                renderOnZeroPageCount={null}
                breakClassName={'page-item'}
                breakLinkClassName={'page-link'}
                containerClassName={'pagination'}
                pageClassName={'page-item'}
                pageLinkClassName={'page-link'}
                previousClassName={'page-item'}
                previousLinkClassName={'page-link'}
                nextClassName={'page-item'}
                nextLinkClassName={'page-link'}
                activeClassName={'active'}
              />
            </div>
        </div>
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

    function uniq(array) {
      var seen = {};
      return array.filter(function(item) {
          return seen.hasOwnProperty(item) ? false : (seen[item] = true);
      });
  }

    useEffect(() => {
        if (searchInputValue.trim() === "") {
            setArticleResult([]);
            setDiscussionistResult([]);
        } else {
            const articleSearch = createDataObject(data)
              .filter('มาตรา', extractNumbersFromString(searchInputValue))
              .append(createDataObject(data).search('ร่างบทบัญญัติ', searchInputValue))
              .append(createDataObject(data).search('ประเด็นการพิจารณา', searchInputValue))
              .append(createDataObject(data).search('ผู้อภิปราย', searchInputValue))
              .data;
            
            let articleResult = articleSearch.map(obj =>
              [ obj.มาตรา,
                (isNumeric(obj.มาตรา) ? "มาตรา " : "") + obj.มาตรา + "|(" +
                (isNumeric(obj.หมวด) ? "หมวด  " + obj.หมวด + " " : "") +
                chapterIdToName[obj.หมวด] + ")"
              ]
            ).filter(value => value[1] !== "");
            articleResult = uniq(articleResult)
            setArticleResult(articleResult);
            
            let discussionistNameSearch = [...new Set(
              createDataObject(data)
                .data
                .map(obj => obj.ผู้อภิปราย)
                .flat()
            )].filter(item => item.includes(searchInputValue));

            // search by others
            let discussionistOthersSearch = sortAndExtractUniqueByFrequency(
              createDataObject(data)
                .search('มาตรา', searchInputValue)
                .append(createDataObject(data).search('ประเด็นการพิจารณา', searchInputValue))
                .append(createDataObject(data).search('ร่างบทบัญญัติ', searchInputValue))
                .data
                .map(obj => obj.ผู้อภิปราย)
                .flat()
            );

            setDiscussionistResult([...new Set(discussionistNameSearch.concat(discussionistOthersSearch))].filter(value => value !== ""));
        }

    }, [searchInputValue, searchInput]);
        
    
    return (
      <div data-testid="search">
        <div className="bg-[#310] h-screen">
          <div className="bg-[#310] w-11/12 md:w-5/6 lg:w-3/4 mx-auto min-h-screen mx-auto text-xl text-white pt-4" >

            { searchInputValue ? (
              <div>
                <h4 className="text-header">
                  ค้นหาตามมาตรา
                </h4>

                <RenderArticleResult />
                {/* <div style={{display: 'flex', justifyContent: 'center'}}>
              <PaginatedItems itemsPerPage={5} />
            </div> */}

                <h4 className="pt-4 text-header">
                  ค้นหาตามผู้อภิปราย
                </h4>
                <RenderDiscussionistResult />

                {/* {renderDiscussionistResult()} */}
              </div>
            ) : getHistory().length ? (
              <div>
                <h4 className="text-header">ประวัติการค้นหา</h4>
                {renderHistory()}
              </div>
            ) : ''
            }

            
          </div>
        </div>
      </div>
    );
}
