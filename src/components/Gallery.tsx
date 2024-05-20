import React from 'react';

interface GalleryProps {
    data: { [key: string]: string };
}

const Gallery: React.FC<GalleryProps> = ({ data }) => {
    return (
        <section>
            <h2>{data.galleryTitle}</h2>
            <div>
                {data.galleryImages && data.galleryImages.split(',').map((image, index) => (
                    <img key={index} src={image} alt={`Gallery image ${index + 1}`} />
                ))}
            </div>
        </section>
    );
};

export default Gallery;
