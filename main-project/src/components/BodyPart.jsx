import React from 'react'
import { Box } from '@mui/material'
import BodyPart from './BodyPart'

const HorizontalScrollbar = ({ data, bodyPart, setBodyPart }) => {


  return (
    <div style={{ display: 'flex', overflowX: 'auto' }}>
      {data.map((item) => (
        <Box
          key={item.id || item}
          id={item.id || item} // Alterado de itemId para id
          title={item.id || item}
          m='0 40px'
          sx={{ cursor: 'pointer' }} // Adiciona um estilo de cursor
        >
          <BodyPart item={item} bodyPart={bodyPart} setBodyPart={setBodyPart} />
        </Box>
      ))}
    </div>
  )
}

export default HorizontalScrollbar;
