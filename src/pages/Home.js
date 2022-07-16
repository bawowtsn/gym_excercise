import React, { useState } from 'react';
import { Box } from '@mui/material';
import HeroBanner from '../components/HeroBanner.js';
import SearchExcercises from '../components/SearchExcercises.js';
import Excercises from '../components/Excercises.js';


const Home = () => {
  return (
    <Box>
      <HeroBanner />
      <SearchExcercises />
      <Excercises />
    </Box>
  )
}

export default Home