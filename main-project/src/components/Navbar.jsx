import React from 'react'
import { Link } from 'react-router-dom'
import { Stack } from '@mui/material'

import Fitness from '../assets/Fitness.png'

const Navbar = () => {
  return (
    <Stack>
      <Link to="/">
      <img src={Fitness} style={{width: '48px',height: '48px',margin: '0 20px'}}/>
      </Link>
      <Stack>
        <Link to='/'>
        </Link>
      </Stack>
    </Stack>
  )
}

export default Navbar

