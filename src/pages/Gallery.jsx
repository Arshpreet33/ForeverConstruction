import React from 'react';
import ImageGallery from '../components/ImageGallery';
import '../styles/global.css';

const Gallery = () => {
  return (
    <div className="gallery-page">
      <h2>Our Work Gallery</h2>
      <p>Browse through our collection of completed fence projects.</p>
      <ImageGallery />
    </div>
  );
};

export default Gallery;