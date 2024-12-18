import React from 'react';
import Honeycomb from '../honeycomb';

const HoneycombGrid = ({maxHeight, evenRows, oddRows, paddingVal}) => {
  const gridStyles = {
    display: 'grid',
    justifyContent: 'center',
  };
  var paddingVar = paddingVal + '%';
  const [honeycombs, setFileData] = React.useState([]);

  React.useEffect(() => {
    fetch('/api/stack')
      .then((response) => response.json())
      .then((data) => setFileData(data))
      .catch((error) => console.error(error));
  }, []);

var hexagonsPerRow = evenRows; 
const rows = [];
for (let i = 0; i < honeycombs.length; i += hexagonsPerRow) {
  hexagonsPerRow = i % (evenRows + oddRows) === 0 ? evenRows : oddRows;
  const rowHoneycombs =
    i === 0
      ? honeycombs
.slice(i, i + hexagonsPerRow)
      : i % (hexagonsPerRow * 2) === 0
      ? honeycombs.slice(i - 1, i + hexagonsPerRow)
      : honeycombs.slice(i, i + hexagonsPerRow);
  const rowStyles = 
  //crazy trial: Raw doggin it
  {
    maxHeight: maxHeight,
    display: 'flex',
    justifyContent: 'center'
  }
  console.log(paddingVar);
    // hexagonsPerRow - rowHoneycombs.length > 0
    //   ? 
    //   rowHoneycombs.length % 2 === 0 ?
    //   //Alignment For Stragglers Based On Size (Even Or Odd)
    //   {
    //     maxHeight: maxHeight,
    //     display: 'flex',
    //     justifyContent: 'center',
    //   } :
    //   {
    //     maxHeight: maxHeight,
    //     display: 'flex',
    //     justifyContent: 'center',
    //     paddingRight: paddingVar,
    //   }
    //   :
    //   //Natural Alignment Through Flex Center
    //   {
    //     maxHeight: maxHeight,
    //     display: 'flex',
    //     justifyContent: 'center'
    //   }
    rows.push(
      <div key={`row-${i}`} style={rowStyles}>
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
  }
  return <div style={gridStyles}>{rows}</div>;
};

export default HoneycombGrid;
