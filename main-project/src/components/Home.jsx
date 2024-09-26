import React ,{useState} from 'react'
import { Box } from '@mui/material'
import HeroBanner from './HeroBanner'
import Exercises from './Exercises'
import ExerciseDetail from './ExerciseDetail'
import SearchExercises from './SearchExercises'

const Home = () => {
  return (
    <Box>
      <HeroBanner/>
      <SearchExercises/>
      <Exercises/>
    </Box>
  )
}

export default Home
