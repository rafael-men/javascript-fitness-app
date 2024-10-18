import React, { useContext } from 'react';
import { Box } from '@mui/material';
import BodyPart from './BodyPart';
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';
import ArrowL from '../assets/Left.png';
import ArrowR from '../assets/Right.png';

// Seta esquerda
const LeftArrow = () => {
  const { scrollPrev } = useContext(VisibilityContext);

  return (
    <Box
      onClick={() => scrollPrev()}
      sx={{
        position: 'absolute',
        left: '10px',
        top: '50%',
        transform: 'translateY(-50%)',
        zIndex: 2,
        cursor: 'pointer',
      }}
    >
      <img src={ArrowL} alt="left" style={{ width: '30px', height: '30px' }} />
    </Box>
  );
};

// Seta direita
const RightArrow = () => {
  const { scrollNext } = useContext(VisibilityContext);

  return (
    <Box
      onClick={() => scrollNext()}
      sx={{
        position: 'absolute',
        right: '10px',
        top: '50%',
        transform: 'translateY(-50%)',
        zIndex: 2,
        cursor: 'pointer',
      }}
    >
      <img src={ArrowR} alt="right" style={{ width: '30px', height: '30px' }} />
    </Box>
  );
};

const HorizontalScrollbar = ({ data, bodyPart, setBodyPart }) => {
  return (
    <Box sx={{ position: 'relative', width: '100%', overflow: 'hidden' }}>

      <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
        {data.map((item) => (
          <Box
            key={item.id || item}
            itemId={item.id || item}
            title={item.id || item}
            sx={{ m: '0 40px', display: 'inline-block' }}
          >
            <BodyPart item={item} bodyPart={bodyPart} setBodyPart={setBodyPart} />
          </Box>
        ))}
      </ScrollMenu>
    </Box>
  );
};

export default HorizontalScrollbar;
