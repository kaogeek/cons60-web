import React from 'react';

const ProfileImages = ({ name, imageUrl }) => {
    return (
        <div className="text-center">
            <div class="rounded-full overflow-hidden h-20 w-20 border-4 border-white mx-auto">
              <img class="object-cover h-full w-full" src={imageUrl} alt={name} />
            </div>
            <p>
                {name}
            </p>
        </div>
    );
};

export default ProfileImages;
