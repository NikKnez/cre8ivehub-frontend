import React from 'react';

const MediaGallery = () => {
    // Mock data or fetch from backend
    const mediaItems = [
        { id: 1, url: '/path/to/image1.jpg' },
        { id: 2, url: '/path/to/image2.jpg' }
    ];

    return (
        <div>
            <h1 className="text-2xl font-bold">Media Gallery</h1>
            <div className="grid grid-cols-3 gap-4 mt-4">
                {mediaItems.map((item) => (
                    <div key={item.id} className="bg-white p-4 shadow-md">
                        <img src={item.url} alt={`Media ${item.id}`} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MediaGallery;
