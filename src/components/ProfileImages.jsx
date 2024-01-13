import React from 'react';

const ProfileImages = ({ name, imageUrl, size }) => {
    return (
        <div className="text-center">
            <div className="rounded-full overflow-hidden h-20 w-20 border-2 border-white mx-auto"
                style={{ height: size, width: size }}
            >
              <img className="object-cover h-full w-full" src={imageUrl} alt={name} />
            </div>
            {name ? <p>{name}</p> : null}
        </div>
    );
};

export default ProfileImages;
