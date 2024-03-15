function SortBy({ sort, setSort }) {
  return (
    <div className="text-center md:text-right">
      <div className="rounded-full py-2 px-2 block-darker inline-block">
        <select
          className="bg-neutral-900 rounded-full w-full"
          value={sort}
          onChange={(e) => setSort(parseInt(e.target.value))}
        >
          <option value={0}>เรียงจากแก้ไขมาก</option>
          <option value={1}>เรียงจากแก้ไขน้อย</option>
        </select>
      </div>
    </div>
  );
}

export default SortBy;
