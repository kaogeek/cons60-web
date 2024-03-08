import DiscussionistButton from "./DiscussionistButton";
import { Icon } from "@iconify/react";

function SelectDiscussionistsMobile(props) {
  const { selectedDiscussionists, discussionists ,onChange, close } = props;
  return (
    <div className="bg-[#131313] p-4 flex flex-col gap-2 fixed z-50 top-0 left-0 w-full h-screen overflow-auto">
      <button className="self-end my-3" onClick={() => close()}>
        <Icon icon="line-md:close" style={{ fontSize: "32px" }}></Icon>
      </button>
      <div className="text-base font-bold py-2">ผู้อภิปรายทั้งหมด {discussionists.length} ท่าน</div>
      <DiscussionistButton
        key={"ผู้อภิปรายทั้งหมด"}
        discussionist={"ผู้อภิปรายทั้งหมด"}
        selected={selectedDiscussionists.length === 0}
        onClick={() => {
          onChange([]);
        }}
      />
      {discussionists.map((discussionist) => (
        <DiscussionistButton
          key={discussionist}
          discussionist={discussionist}
          selected={selectedDiscussionists.includes(discussionist)}
          onClick={() => {
            if (selectedDiscussionists.includes(discussionist)) {
              onChange(selectedDiscussionists.filter((s) => s !== discussionist));
            } else {
              onChange([...selectedDiscussionists, discussionist]);
            }
          }}
        />
      ))}
    </div>
  );
}

export default SelectDiscussionistsMobile;
