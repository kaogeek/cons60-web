import SectionButton from "./SectionButton";
import sections from "../../constants/sections";
import { Icon } from "@iconify/react";

function SelectSectionsMobile(props) {
  const { selectedSections, onChange, close } = props;
  return (
    <div className="bg-[#131313] p-4 flex flex-col gap-2 fixed z-50 top-0 left-0 w-full h-screen overflow-auto">
      <button className="self-end my-3" onClick={() => close()}>
        <Icon icon="line-md:close" style={{ fontSize: "32px" }}></Icon>
      </button>
      <div className="text-base font-bold py-2">เนื้อหาแบ่งออกเป็น 18 หมวด</div>
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

export default SelectSectionsMobile;
