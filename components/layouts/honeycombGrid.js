import React from 'react';
import Honeycomb from '../honeycomb';

const HoneycombGrid = ({ maxHeight, evenRows, oddRows, paddingVal }) => {
  const gridStyles = {
    display: 'grid',
    justifyContent: 'center',
  };
  const paddingVar = paddingVal + '%';
  const [honeycombs, setFileData] = React.useState([]);
  
  React.useEffect(() => {
    fetch('/api/stack')
      .then((response) => response.json())
      .then((data) => {
        setFileData(data);// Stop loading when data is fetched
      })
      .catch((error) => {
        console.error(error);// Ensure loading stops even on error
      });
  }, []);
  

  let count = 0;
  let hexagonsPerRow = evenRows; // Starting with evenRows
  const rows = [];

  while (count < honeycombs.length) {
    const rowHoneycombs = honeycombs.slice(count, count + hexagonsPerRow);

    const isIncomplete = hexagonsPerRow - rowHoneycombs.length > 0;
    const isRowEven = rowHoneycombs.length % 2 === 0;
    const isHexPerRowEven = hexagonsPerRow % 2 === 0;

    const caseKey = `${isIncomplete ? 'incomplete' : 'complete'}-${isRowEven ? 'even' : 'odd'}-${isHexPerRowEven ? 'even' : 'odd'}`;

    let rowStyles;
    switch (caseKey) {
      case 'incomplete-even-even':
        rowStyles = {
          maxHeight: maxHeight,
          display: 'flex',
          justifyContent: 'center',
          paddingRight: paddingVar,
        };
        break;

      case 'incomplete-odd-odd':
        rowStyles = {
          maxHeight: maxHeight,
          display: 'flex',
          justifyContent: 'center',
        };
        break;

      case 'incomplete-even-odd':
      case 'incomplete-odd-even':
        rowStyles = {
          maxHeight: maxHeight,
          display: 'flex',
          justifyContent: 'center',
          paddingLeft: paddingVar,
        };
        break;

      default:
        rowStyles = {
          maxHeight: maxHeight,
          display: 'flex',
          justifyContent: 'center',
        };
        break;
    }

    rows.push(
      <div key={`row-${count}`} style={rowStyles}>
        {rowHoneycombs.map((honeycomb, index) => (
          <Honeycomb
            key={index}
            imageUrl={honeycomb.imageUrl}
            alt={honeycomb.alt}
            width={'auto'}
            height={'100%'}
            maxWidth={maxHeight}
          />
        ))}
      </div>
    );

    count += hexagonsPerRow;
    hexagonsPerRow = hexagonsPerRow === evenRows ? oddRows : evenRows;
  }

  return <div style={gridStyles}>{rows}</div>;
};

export default HoneycombGrid;
