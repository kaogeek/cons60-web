import React from 'react';

function SortBy({ sort, setSort }) {
  return (
    <div className="text-center md:text-right">
      <div className="rounded-full py-2 px-2 block-darker inline-block">
        <select
          className="bg-neutral-900 rounded-full w-full"
          value={sort}
          onChange={(e) => setSort(e.target.value)}
        >
          <option value="countDesc">เรียงจากแก้ไขมาก</option>
          <option value="countAsc">เรียงจากแก้ไขน้อย</option>
          <option value="lowest">เรียงจากมาตราที่หนึ่ง</option>
          <option value="highest">เรียงจากมาตราที่สิบหก</option>
        </select>
      </div>
    </div>
  );
}

export default SortBy;


