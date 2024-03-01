import { Icon } from "@iconify/react";

function DiscussionistMobilePillButton({ discussionist, remove }) {
  return (
    <div className="bg-[#2A2A2A] rounded-full py-2 px-2">
      <div className="flex justify-between gap-1 items-center">
        <div
          style={{
            backgroundColor: "#FFFFFF",
            width: "16px",
            height: "16px",
            borderRadius: "50%",
            flexShrink: 0,
          }}
        ></div>
        <div className="flex-auto text-sm">{discussionist}</div>
        <button onClick={() => remove(discussionist)}>
          <Icon icon="line-md:close" style={{ fontSize: "16px" }}></Icon>
        </button>
      </div>
    </div>
  );
}

export default DiscussionistMobilePillButton;
