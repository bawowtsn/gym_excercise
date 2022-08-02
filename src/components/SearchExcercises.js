import React, {useEffect, useState } from 'react';
import { Box, Button, Stack, TextField, Typography } from '@mui/material';
import { fetchData, excerciseOptions } from '../utils/fetchData';
import HorizontalScrollBar from './HorizontalScrollBar';


const SearchExcercises = ({ setExcercises, bodyPart, setBodyPart}) => {
  const [search, setSearch] = useState("")
  const [bodyPartList, setBodyPartList] =useState([])

  useEffect(() => {
    const fetchExcercisesData = async () => {
      const bodyPartListData = await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList', excerciseOptions);
      setBodyPartList(['all', ...bodyPartListData]);
    }
    

    fetchExcercisesData();
  }, [])
  
  const handleSearch = async () => {
    if(search) {
      const excercisesData = await fetchData('https://exercisedb.p.rapidapi.com/exercises', excerciseOptions);
      
      const searchedExcercises = excercisesData.filter(
        (e) => e.name.toLocaleLowerCase().includes(search)
        || e.target.toLocaleLowerCase().includes(search)
        || e.equipment.toLocaleLowerCase().includes(search)
        || e.bodyPart.toLocaleLowerCase().includes(search)
      );
      setSearch("");
      setExcercises(searchedExcercises);
    };

  }
  
  return (
    <Stack alignItems="center" mt="37px" justifyContent="center" p="20px" >
      <Typography
        fontWeight={700}
        sx={{fontSize: {lg:'44px', xs: '30px'}}}
        mb="50px" textAlign="center"
      >
        Awesome Excercises You <br /> Should Know
      </Typography>
      <Box position="relative" mb="72px">
        <TextField 
          sx={{
            input: {
              fontWeight: '700px', 
              border:'none', 
              borderRadius: '4px'},
            width: {lg:'800px', xs: '350px'},
            backgroundColor: '#fff',
            borderRadius: '40px'
          }}
          height="76px"
          value = {search}
          onChange={(e) => setSearch(e.target.value.toLocaleLowerCase())}
          placeholder="Search Excercises"
          type="text"
        />
        <Button className='search-btn'
          sx={{
            bgcolor: "#FF2625",
            color: "#fff",
            textTransform: 'none',
            width: {lg: '175px', xs: '80px'},
            fontSize: { lg:'20px', xs:'14px'},
            height:'56px',
            position:"absolute",
            right:'0'
          }}
          onClick={handleSearch}
        >
          Search
        </Button>
      </Box>
      <Box sx={{position: 'relative', width: '100%', p:'20px'}}>
          <HorizontalScrollBar data={bodyPartList}
          bodyPart={bodyPart} setBodyPart={setBodyPart} isBodyPart/>
      </Box>
    </Stack>
  )
}

export default SearchExcercises