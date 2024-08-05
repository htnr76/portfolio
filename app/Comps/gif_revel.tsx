'use client';
import React, { useState } from 'react';

interface ImgRevealProps {
  src: string;
  children: React.ReactNode;
}

const ImgReveal: React.FC<ImgRevealProps> = ({ src, children }) => {
  const [hovered, setHovered] = useState(false);
  const [offset, setOffset] = useState(0);

  const handleLeave = () => {
    setHovered(false);
    setOffset(0);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLSpanElement>) => {
    setOffset(offset + e.movementX);
  };

  return (
    <span
      className="relative"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={handleLeave}
      onMouseMove={handleMouseMove}
    >
      {children}
      {hovered && (
        <img
          src={src}
          alt="special effect"
          className="absolute bottom-1/2 right-0"
          style={{
            transform: `translateX(${offset}px)`,
            maxWidth: '400px', // Set maximum width to 100%
            width: '200px', // Set width to 100% of the viewport width
            height: 'auto', // Set height to auto to maintain aspect ratio
          }}
        />
      )}
    </span>
  );
};

export default ImgReveal;