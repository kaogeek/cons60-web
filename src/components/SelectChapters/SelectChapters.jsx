import ChapterButton from "./ChapterButton";
import chapters from "../../constants/chapters";

function SelectChapters(props) {
  const { selectedChapters, onChange } = props;
  return (
    <div className="bg-[#131313] p-4 rounded-2xl flex flex-col gap-2">
      <div className="text-xl font-bold">เนื้อหาแบ่งออกเป็น 18 หมวด</div>
      <ChapterButton
        key={"ทั้งหมด"}
        chapter={"ทั้งหมด"}
        selected={selectedChapters.length === 0}
        onClick={() => {
          onChange([]);
        }}
      />
      {chapters.map((chapter) => (
        <ChapterButton
          key={chapter}
          chapter={chapter}
          selected={selectedChapters.includes(chapter)}
          onClick={() => {
            if (selectedChapters.includes(chapter)) {
              onChange(selectedChapters.filter((s) => s !== chapter));
            } else {
              onChange([...selectedChapters, chapter]);
            }
          }}
        />
      ))}
    </div>
  );
}

export default SelectChapters;
