import React from 'react'
import { Box, Stack, Typography } from '@mui/material'
import HorizontalScrollBar from './HorizontalScrollBar'
import Loader from './Loader'


const SimilarExcercises = ({targetMuscleExcercises, equipmentExcercises}) => {
  return (
    <Box sx={{ mt: {lg: "100px", xs: "0px"}}}>
      <Typography variant="h3" mb="5" >Excercises that target the same muscle group</Typography>
      <Stack direction="row" sx={{ p:'2', position: 'relative' }}>
        {targetMuscleExcercises.length?
         <HorizontalScrollBar data={targetMuscleExcercises} />
        :<Loader/>
        }
      </Stack>
      <Typography variant="h3" mb="5" >Excercises that use the same equipment</Typography>
      <Stack direction="row" sx={{ p:'2', position: 'relative' }}>
        {equipmentExcercises.length?
         <HorizontalScrollBar data={equipmentExcercises} />
        :<Loader/>
        }
      </Stack>
    </Box>
  )
}

export default SimilarExcercises