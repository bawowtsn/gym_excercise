import React, {useEffect, useState} from 'react'
import Pagination from '@mui/material/Pagination';
import { Box, Stack, Typography} from '@mui/material'
import { excerciseOptions,fetchData } from '../utils/fetchData'
import ExcerciseCard from './ExcerciseCard'

const Excercises = ( {excercises, setExcercises, bodyPart}) => {
  //console.log(bodyPart)
  //console.log(excercises)
  const [currentPage, setCurrentPage] = useState(1);
  const excercisesPerPage = 9;

  const indexOfLastExcercise = currentPage * excercisesPerPage;
  const indexOfFirstExcercise = indexOfLastExcercise - excercisesPerPage;
  const currentExcercises = excercises.slice (indexOfFirstExcercise, indexOfLastExcercise)

  const paginate = (e, value) => {
    setCurrentPage(value);
    window.scrollTo({ top: 1800, behavior: 'smooth'})

  }

  return (
    <Box id="excercises"
      sx={{mt: {lg:'110px'}}}
      mt="50px"
      p="20px"
    >
      <Typography varient="h3" mb="46px">
        Showing Results
      </Typography>
      <Stack direction="row" sx={{gap: {lg:'110px', xs: '50px'}}} 
      flexWrap="wrap" justifyContent="center"
      >
        {currentExcercises.map( (excercise, index)=> (
          <ExcerciseCard key={index} excercise={excercise} />
        ) )}
        </Stack>
        <Stack mt="100px" alignItems="center">
            {excercises.length > 9 && (
              <Pagination
                color="standard"
                shape="rounded"
                defaultPage={1}
                count={Math.ceil(excercises.length / excercisesPerPage)}
                page={currentPage}
                onChange={paginate}
                size="large"
              />
            )}
        </Stack>
    </Box>
  )
}

export default Excercises