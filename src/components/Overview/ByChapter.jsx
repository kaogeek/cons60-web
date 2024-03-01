import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import ListItem from "../ListItem";
import chapterColorCode from "../../constants/chapterColorCode";
import SortBy from "../SortBy";

import createDataObject from "../../c60-data-query/data-object.js";
import data from "../../c60-data-query/data.js";
import { chapterIdToName } from "../../constants/chapters";

function ByChapter() {
  const [sort, setSort] = useState(0);
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
    const sorted = Object.entries(newResult).sort((a, b) =>
      sort === 0 ? b[1] - a[1] : a[1] - b[1]
    );
    setResult(sorted);
  }, [sort]);

  return (
    <div className="flex justify-center items-center">
      <div className="w-3/4 flex flex-col gap-4">
        <div className="flex flex-row justify-between flex-wrap gap-4">
          <div className="text-3xl font-bold">ทุกหมวด</div>
          <SortBy sort={sort} setSort={setSort} />
        </div>
        <div className="flex flex-col justify-center items-center gap-2.5 w-full">
          {result.map(([chapterName, count]) => (
            <Link to={`/chapter/${chapterName}`} className="w-full" key={chapterName}>
              <ListItem
                title={chapterName}
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
