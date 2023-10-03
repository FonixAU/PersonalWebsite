import React from 'react';
import Honeycomb from '../honeycomb';

const HoneycombGrid = ({ honeycombs, hexagonWidth, hexagonHeight }) => {
  const gridStyles = {
    display: 'grid',
    gridTemplateColumns: `repeat(auto-fill, ${hexagonWidth || '100px'})`,
    gridAutoRows: hexagonHeight || '115px',
    gap: '10px', // Adjust as needed for spacing
    justifyContent: 'center',
  };

  return (
    <div style={gridStyles}>
      {honeycombs.map((honeycomb, index) => (
        <Honeycomb
          key={index}
          imageUrl={honeycomb.imageUrl}
          alt={honeycomb.alt}
          width={hexagonWidth}
          height={hexagonHeight}
        />
      ))}
    </div>
  );
}

export default HoneycombGrid;
