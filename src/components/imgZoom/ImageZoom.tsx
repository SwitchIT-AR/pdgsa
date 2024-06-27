import { useState } from 'react';
import styles from './ImageZoom.module.css';

const ImageZoom = ({ src, alt }: { src: string, alt: string}) => {
  const [isZoomed, setIsZoomed] = useState(false);

  const handleImageClick = () => {
    setIsZoomed(!isZoomed);
  };

  return (
    <div className={styles.imageContainer} onClick={handleImageClick}>
      <img
        src={src}
        alt={alt}
        className={`${styles.image} ${isZoomed ? styles.zoomed : ''}`}
        style={{width: '100%', height: '100%'}}
      />
    </div>
  );
};

export default ImageZoom;
