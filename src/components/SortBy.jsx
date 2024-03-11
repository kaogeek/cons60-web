function SortBy({ sort, setSort }) {
  return (
    <div className="rounded-full py-2 px-2 block-darker">
      <select
        className="bg-neutral-900 rounded-full w-full"
        value={sort}
        onChange={(e) => setSort(parseInt(e.target.value))}
      >
        <option value={0}>เรียงจากแก้ไขมาก-น้อย</option>
        <option value={1}>เรียงจากแก้ไขน้อย-มาก</option>
      </select>
    </div>
  );
}

export default SortBy;
