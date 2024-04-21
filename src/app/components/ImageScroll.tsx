// components/ImageScroll.tsx

import { useState, useRef } from 'react';

interface ImageScrollProps {
  images: string[];
}

const ImageScroll: React.FC<ImageScrollProps> = ({ images }) => {
  const [scrollX, setScrollX] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleScroll = (direction: 'left' | 'right') => {
    const container = containerRef.current;
    const scrollAmount = 300; // Adjust this value to change scroll distance

    if (container) {
      if (direction === 'left') {
        container.scrollBy({
          left: -scrollAmount,
          behavior: 'smooth',
        });
        setScrollX(scrollX - scrollAmount);
      } else {
        container.scrollBy({
          left: scrollAmount,
          behavior: 'smooth',
        });
        setScrollX(scrollX + scrollAmount);
      }
    }
  };

  return (
    <div style={{ overflowX: 'auto', whiteSpace: 'nowrap' }}>
      <button onClick={() => handleScroll('left')}>{'<'}</button>
      <div ref={containerRef} style={{ display: 'inline-block' }}>
        {images.map((image, index) => (
          <img key={index} src={image} alt={`Image ${index + 1}`} style={{ marginRight: '10px' }} />
        ))}
      </div>
      <button onClick={() => handleScroll('right')}>{'>'}</button>
    </div>
  );
};

export default ImageScroll;
