import React, {useContext} from 'react';
import { Box, IconButton, Typography } from '@mui/material';
import BodyPart from './BodyPart';
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';
import ArrowL from '../assets/Left.png'
import ArrowR from '../assets/Right.png'
import '../App.css'
const LeftArrow = () => {
  const { scrollPrev } = useContext(VisibilityContext);

  return (
    <Typography onClick={()=>scrollPrev()} className='left-arrow'>
      <img src={ArrowL} alt="left" />
    </Typography>
  );
};

const RightArrow = () => {
  const { scrollNext } = useContext(VisibilityContext);

  return (
    <Typography onClick={()=>scrollNext()} className='left-arrow'>
      <img src={ArrowR} alt="light" />
    </Typography>
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
