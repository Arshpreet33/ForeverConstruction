import React from 'react';
import '../styles/global.css';

const ImageGallery = () => {
  // Array of image filenames - now up to gallery24.jpg
  const images = Array.from({ length: 24 }, (_, i) => `${i + 1}.jpeg`);
  
  return (
    <div className="masonry-gallery">
      {images.map((img, index) => (
        <div 
          key={index} 
          className={`gallery-item 
            ${index % 6 === 0 ? 'wide' : ''} 
            ${index % 8 === 0 ? 'tall' : ''}
            ${index % 10 === 0 ? 'wide-tall' : ''}`}
        >
          <img
            src={`/images/${img}`}
            alt={`Fence installation example ${index + 1}`}
            loading="lazy"
          />
        </div>
      ))}
    </div>
  );
};

export default ImageGallery;