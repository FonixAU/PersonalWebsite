import React from 'react';
import Honeycomb from '../honeycomb';

const HoneycombGrid = ({ honeycombs, hexagonWidth, hexagonHeight }) => {
  const gridStyles = {
    display: 'grid',
    gap: '', // Adjust as needed for spacing
    justifyContent: 'center',
  };

  const numRows = Math.ceil(honeycombs.length / 6); // 3 hexagons per row (adjust as needed)

  const rows = Array.from({ length: numRows }, (_, rowIndex) => {
    const isOddRow = rowIndex % 2 === 1;
    const numHexagonsInRow = isOddRow ? 6 : 5; // 2 hexagons for even rows, 3 for odd rows

    return (
      <div key={`row-${rowIndex}`} style={{ display: 'flex', justifyContent: 'center' }}>
        {honeycombs
          .slice(rowIndex * numHexagonsInRow, (rowIndex + 1) * numHexagonsInRow)
          .map((honeycomb, index) => (
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
  });

  return <div style={gridStyles}>{rows}</div>;
};

export default HoneycombGrid;
