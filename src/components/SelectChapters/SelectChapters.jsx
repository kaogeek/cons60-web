import ChapterButton from "./ChapterButton";
import chapters, { chapterNameToId } from "../../constants/chapters";

function SelectChapters(props) {
  const { selectedChapters, onChange } = props;
  return (
    <div className="p-4 rounded-2xl flex flex-col gap-2 block-darker">
      <div className="text-xl font-bold text-subheader">กรองข้อมูลในหมวด</div>
      <ChapterButton
        key={"ทั้งหมด"}
        chapter={"ทั้งหมด"}
        wording={"ทั้งหมด"}
        selected={selectedChapters.length === 0}
        onClick={() => {
          onChange([]);
        }}
      />
      {chapters.map((chapter) => (
        <ChapterButton
          key={chapter}
          chapter={chapter}
          wording={
            chapterNameToId[chapter].match(/^\d+$/)
              ? 'หมวด ' + chapterNameToId[chapter] + ' ' + chapter
              : chapter
          }
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
