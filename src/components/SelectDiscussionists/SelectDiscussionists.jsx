import DiscussionistButton from "./DiscussionistButton";

function SelectDiscussionists(props) {
  const { selectedDiscussionists, onChange, discussionists } = props;
  return (
    <div className="p-4 rounded-2xl flex flex-col gap-2 block-darker">
      <div className="text-xl font-bold text-subheader">ผู้อภิปรายทั้งหมด {discussionists.length} ท่าน</div>
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

export default SelectDiscussionists;
