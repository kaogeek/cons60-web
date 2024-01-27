import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import ListItem from "../ListItem";
import sectionColorCode from "../../constants/sectionColorCode";
import SortBy from "../SortBy";

import createDataObject from "../../c60-data-query/data-object.js";
import data from "../../c60-data-query/data.js";
import { sectionIdToName } from "../../constants/sections";

function BySection() {
  const [sort, setSort] = useState(0);
  const [result, setResult] = useState([]);

  useEffect(() => {
    const dataObject = createDataObject(data.doc);

    const newResult = dataObject.data.reduce((acc, row) => {
      const sectionName = sectionIdToName[row["หมวด"]];
      if (!acc[sectionName]) {
        acc[sectionName] = 1;
      } else {
        acc[sectionName] += 1;
      }
      return acc;
    }, {});

    // Convert to array
    // [sectionName, count]
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
          {result.map(([sectionName, count]) => (
            <Link to={`/${sectionName}`} className="w-full" key={sectionName}>
              <ListItem
                title={sectionName}
                count={count}
                chartColor={sectionColorCode[sectionName]}
              />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default BySection;
