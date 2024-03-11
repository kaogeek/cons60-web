import ChapterButton from "./ChapterButton";
import chapters, { chapterNameToId } from "../../constants/chapters";
import { Icon } from "@iconify/react";

function SelectChaptersMobile(props) {
  const { selectedChapters, onChange, close } = props;
  return (
    <div className="bg-[#131313] p-4 flex flex-col gap-2 fixed z-50 top-0 left-0 w-full h-screen overflow-auto">
      <button className="self-end my-3" onClick={() => close()}>
        <Icon icon="line-md:close" style={{ fontSize: "32px" }}></Icon>
      </button>
      <div className="text-base font-bold py-2">เนื้อหาแบ่งออกเป็น 18 หมวด</div>
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
            chapterNameToId[chapter].match(/^[0-9]+$/)
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

export default SelectChaptersMobile;
