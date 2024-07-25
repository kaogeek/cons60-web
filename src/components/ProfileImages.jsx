const ProfileImages = ({ name, imageUrl, size }) => {
  const nameArr = name?.split(' ');
  return (
    <div className="text-center">
      <div
        className="rounded-full overflow-hidden h-20 w-20 bg-[#222] border-[3px] border-[#ddd] mx-auto"
        style={{ height: size, width: size }}
      >
        <img className="object-cover h-full w-full" src={imageUrl} alt={'ภาพถ่ายของ ' + name} />
      </div>
      { nameArr && (
        <div className="mt-3 text-header">
          {nameArr[0]}
          <br />
          {nameArr[1]}
        </div>
      )}
    </div>
  );
};

export default ProfileImages;
