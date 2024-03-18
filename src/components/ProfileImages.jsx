const ProfileImages = ({ name, imageUrl, size }) => {
    return (
        <div className="text-center">
          <div className="rounded-full overflow-hidden h-20 w-20 bg-[#222] border-[3px] border-[#ddd] mx-auto"
                style={{ height: size, width: size }}
            >
              <img className="object-cover h-full w-full" src={imageUrl} alt={'ภาพถ่ายของ ' + name} />
            </div>
            {
              name
                ? <div className="mt-3 text-header">
                    {
                      name
                        .split(' ')
                        .map(x => (
                          <><span className="inline-block">{x}</span> </>
                        ))
                    }
                  </div>
                : null
            }
        </div>
    );
};

export default ProfileImages;
