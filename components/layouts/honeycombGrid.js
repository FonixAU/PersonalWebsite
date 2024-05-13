import React from 'react';
import Honeycomb from '../honeycomb';

const HoneycombGrid = () => {
  const gridStyles = {
    display: 'grid',
    justifyContent: 'center',
  };
  const [honeycombs, setFileData] = React.useState([]);

  React.useEffect(() => {
    fetch('/api/stack')
      .then((response) => response.json())
      .then((data) => setFileData(data))
      .catch((error) => console.error(error));
  }, []);

var hexagonsPerRow = 5; 
const rows = [];
for (let i = 0; i < honeycombs.length; i += hexagonsPerRow) {
  hexagonsPerRow = i % 11 === 0 ? 5 : 6;
  const rowHoneycombs =
    i === 0
      ? honeycombs
.slice(i, i + hexagonsPerRow)
      : i % (hexagonsPerRow * 2) === 0
      ? honeycombs.slice(i - 1, i + hexagonsPerRow)
      : honeycombs.slice(i, i + hexagonsPerRow);
  const rowStyles =
    hexagonsPerRow - rowHoneycombs.length > 0
      ? rowHoneycombs.length % 2 === 0 ?
      //Alignment For Stragglers Based On Size (Even Or Odd)
      {
        maxHeight: '60.92px',
        display: 'flex',
        justifyContent: 'center',
      } :
      {
        maxHeight: '60.92px',
        display: 'flex',
        justifyContent: 'center',
        paddingRight: '16%'
      }
      :
      //Natural Alignment Through Flex Center
      {
        maxHeight: '60.92px',
        display: 'flex',
        justifyContent: 'center',
      }

    rows.push(
      <div key={`row-${i}`} style={rowStyles}>
        {rowHoneycombs.map((honeycomb, index) => (
          <Honeycomb
            key={index}
            imageUrl={honeycomb.imageUrl}
            alt={honeycomb.alt}
            width={'auto'}
            height={'100%'}
          />
        ))}
      </div>
    );
  }
  return <div style={gridStyles}>{rows}</div>;
};

export default HoneycombGrid;
