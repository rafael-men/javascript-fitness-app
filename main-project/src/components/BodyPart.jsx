import React from 'react'
import { Stack,Typography } from '@mui/material'

import Dumbell from '../assets/icon1.png'

const BodyPart = ({item, setBodyPart, bodyPart}) => {
  return (
    <Stack type='button' onClick={()=> {setBodyPart(item); window.scrollTo({top:1800,left:100,behavior:'smooth'})}} alignItems='center' justifyContent='center' className='bodyPart-card' sx={{
        borderTop: bodyPart === item ? '4px solid #114A07' : '',
        backgroundColor: 'lightgray',
        borderRadius: '20px',
        width: '200px',
        height: '200px',
        cursor: 'pointer',
        gap: '47px'
      }}>
      <img src={Dumbell} alt='icon' style={{width:'40px',height:'40px'}} className='body-part-icon'/>
      <Typography fontSize='24px' fontWeight='bold' textTransform='capitalize'>{item}</Typography>
    </Stack>
  )
}

export default BodyPart
