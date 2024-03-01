import { Icon } from "@iconify/react";
import ProfileImages from "../ProfileImages";

function DiscussionistButton({ discussionist, selected, onClick }) {
  const activeStyle = "rounded-full text-black px-2";
  const inactiveStyle = "text-[#9f9f9f] px-2";

  return (
    <button
      className={`py-2 font-bold text-left w-full md:w-64 ${
        selected ? activeStyle : inactiveStyle
      }`}
      style={{
        backgroundColor: selected ? "#FFFFFF" : "#131313",
      }}
      onClick={() => onClick(() => onClick())}
    >
      <div className="flex flex-row gap-2 items-center">
        {!selected ? (
          <ProfileImages
            discussionist={discussionist}
            size={40}
            imageUrl={
              "https://mpics.mgronline.com/pics/Images/558000011197301.JPEG"
            }
          />
        ) : (
          <div className="bg-black rounded-full p-[8px]">
            <Icon icon="mingcute:check-fill" fontSize={"16px"} color="white" />
          </div>
        )}
        <div className="text-ellipsis whitespace-nowrap overflow-hidden">
          {discussionist}
        </div>
      </div>
    </button>
  );
}

export default DiscussionistButton;
