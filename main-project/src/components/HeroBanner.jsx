import React from 'react'
import {Box,Button,Stack,Typography} from '@mui/material'

import Banner from '../assets/Runnin.jpg'

const HeroBanner = () => {
  return (
    <Box sx={{
      mt: {lg: '212px',xs:'70px'},
      ml: {sm: '50px'}
    }} position='relative' p='20px'>
      <Typography color='#006400' fontWeight='600' fontSize='26px'>
        Fitness Club
      </Typography>
      <Typography fontWeight='700' sx={{
        fontSize:{lg:'44px',xs:'40px'}
      }} mb='23px' mt='30px'>
        Need to get healthy?
      </Typography>
      <Typography fontSize='22px' lineHeight='35px' mb={5}>
        Check out what we are offering:
      </Typography>
      <Button variant='container' color='error' href='#exercises' sx={{
        backgroundColor:'#006400',
        padding:'10px',
        color:'white'
      }}>Explore Exercises</Button>
      <Typography fontWeight={600} sx={{
        opacity:0.1,
        display: {lg: 'block',xs: 'none'}
      }} fontSize='200px'>
        Health
      </Typography>
      <img src={Banner} className='hero-banner-img'/>
    </Box>
  )
}

export default HeroBanner