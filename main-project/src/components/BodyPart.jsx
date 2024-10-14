import React from 'react'
import { Stack,Typography } from '@mui/material'

import Dumbell from '../assets/icon1.png'

const BodyPart = ({item, setBodyPart, bodyPart}) => {
  return (
    <Stack type='button' alignItems='center' justifyContent='center' className='bodyPart-card' sx={{
        borderTop: bodyPart === item ? '4px solid #3A1212' : '',
        backgroundColor: 'lightgray',
        borderBottomLeftRadius: '20px',
        width: '270px',
        height: '280px',
        cursor: 'pointer',
        gap: '47px'
      }}>
      <img src={Dumbell} alt='icon' style={{width:'40px',height:'40px'}} className='body-part-icon'/>
    </Stack>
  )
}

export default BodyPart
