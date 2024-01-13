import SectionButton from "./SectionButton";
import sections from "../../constants/sections";

function SelectSections(props) {
  const { selectedSections, onChange } = props;
  return (
    <div className="bg-[#131313] p-4 rounded-2xl flex flex-col gap-2">
      <div className="text-xl font-bold">เนื้อหาแบ่งออกเป็น 18 หมวด</div>
      <SectionButton
        key={"ทั้งหมด"}
        section={"ทั้งหมด"}
        selected={selectedSections.length === 0}
        onClick={() => {
          onChange([]);
        }}
      />
      {sections.map((section) => (
        <SectionButton
          key={section}
          section={section}
          selected={selectedSections.includes(section)}
          onClick={() => {
            if (selectedSections.includes(section)) {
              onChange(selectedSections.filter((s) => s !== section));
            } else {
              onChange([...selectedSections, section]);
            }
          }}
        />
      ))}
    </div>
  );
}

export default SelectSections;
