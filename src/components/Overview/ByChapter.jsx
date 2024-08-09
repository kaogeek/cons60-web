import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import ListItem from "../ListItem";
import chapterColorCode from "../../constants/chapterColorCode";
import SortBy from "../SortBy";

import createDataObject from "../../c60-data-query/data-object.js";
import data from "../../c60-data-query/data.js";
import { chapterNameToId, chapterIdToName } from "../../constants/chapters";

function ByChapter() {
  const [sort, setSort] = useState('lowest');
  const [result, setResult] = useState([]);

  useEffect(() => {
    const dataObject = createDataObject(data);

    const newResult = dataObject.data.reduce((acc, row) => {
      const chapterName = chapterIdToName[row["หมวด"]];
      if (!acc[chapterName]) {
        acc[chapterName] = 1;
      } else {
        acc[chapterName] += 1;
      }
      return acc;
    }, {});

    // Convert to array
    // [chapterName, count]
    const sorted = Object.entries(newResult).sort((a, b) => {
      if (sort === 'lowest' || sort === 'highest') {
        const idA = parseInt(chapterNameToId[a[0]].match(/\d+/), 10);
        const idB = parseInt(chapterNameToId[b[0]].match(/\d+/), 10);

        if (isNaN(idA)) return 1;
        if (isNaN(idB)) return -1;

        return sort === 'lowest' ? idA - idB : idB - idA;
      } else if (sort === 'countAsc') {
        return a[1] - b[1];
      } else if (sort === 'countDesc') {
        return b[1] - a[1];
      }
      return 0;
    });

    setResult(sorted);
  }, [sort]);

  return (
    <div className="flex justify-center items-center">
      <div className="w-11/12 md:w-5/6 lg:w-3/4 flex flex-col gap-4">
        <div className="flex flex-row justify-between flex-wrap gap-1 text-center">
          <div className="text-2xl md:text-3xl font-bold text-header">ค้นหาจากหมวด</div>
          <SortBy sort={sort} setSort={setSort} />
        </div>
        <div className="flex flex-col items-center gap-2 w-full">
          {result.map(([chapterName, count]) => (
            <Link to={`/chapter/${chapterName}`} className="w-full" key={chapterName} state={{ backable: true }}>
              <ListItem
                title={
                  chapterNameToId[chapterName].match(/^\d+$/)
                    ? 'หมวด ' + chapterNameToId[chapterName] + ' ' + chapterName
                    : chapterName
                }
                count={count}
                chartColor={chapterColorCode[chapterName]}
              />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ByChapter;
