import React from 'react';

function SortBy({ sort, setSort, mode = "" }) {
  return (
    <div className="text-center md:text-right">
      <div className="rounded-full py-2 px-2 block-darker inline-block">
        <select
          className="bg-neutral-900 rounded-full w-full"
          value={sort}
          onChange={(e) => setSort(Number(e.target.value))}
        >
          <option value={0}>เรียงจากแก้ไขมาก</option>
          <option value={1}>เรียงจากแก้ไขน้อย</option>
          { mode === "section" ? (
            <option value={2}>เรียงลำตับตามมาตรา</option>
          ) : mode === "chapter" ? ( <option value={2}>เรียงลำตับตามหมวด</option>): (<></>)
          }
        </select>
      </div>
    </div>
  );
}

export default SortBy;