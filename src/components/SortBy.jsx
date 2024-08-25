import React from 'react';

function SortBy({ sort, setSort }) {
  return (
    <div className="text-center md:text-right">
      <div className="rounded-full py-2 px-2 block-darker inline-block">
        <select
          className="bg-neutral-900 rounded-full w-full"
          value={sort}
          onChange={(e) => setSort(Number(e.target.value))}
        >
          <option value={3}>เรียงจากแก้ไขมาก</option>
          <option value={2}>เรียงจากแก้ไขน้อย</option>
          <option value={0}>เรียงจากมาตราที่หนึ่ง</option>
          <option value={1}>เรียงจากมาตราที่สิบหก</option>
        </select>
      </div>
    </div>
  );
}

export default SortBy;