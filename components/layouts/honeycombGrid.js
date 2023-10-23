import React from 'react';
import Honeycomb from '../honeycomb';
import { grid } from '@chakra-ui/react';

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

  const hexagonsPerRow = 6;
  const rows = [];

  for (let i = 0; i < honeycombs.length; i += hexagonsPerRow) {
    const numHexagonsInRow = i % (hexagonsPerRow * 2) === 0 ? hexagonsPerRow - 1 : hexagonsPerRow;
    const rowHoneycombs =
    i === 0
      ? honeycombs.slice(i, i + numHexagonsInRow)
      : i % (hexagonsPerRow * 2) === 0
      ? honeycombs.slice(i - 1, i + numHexagonsInRow)
      : honeycombs.slice(i - 1, i - 1 + numHexagonsInRow);
     
    const rowStyles =
    numHexagonsInRow - rowHoneycombs.length > 0
      ? rowHoneycombs.length % 2 === 0 ? 
      {
        maxHeight: '60.92px', 
        display: 'flex', 
        justifyContent: 'center',
        paddingLeft: '16%'
      } :
      {
        maxHeight: '60.92px', 
        display: 'flex', 
        justifyContent: 'center'
      }
      :
      {
        maxHeight: '60.92px', 
        display: 'flex', 
        justifyContent: 'center'
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
