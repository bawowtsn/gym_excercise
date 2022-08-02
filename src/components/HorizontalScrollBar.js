import React, { useContext } from 'react'
import { Box, Typography } from '@mui/material'
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu'
import BodyPart from './BodyPart'
import RightArrowIcon from '../assets/icons/right-arrow.png';
import LeftArrowIcon from '../assets/icons/left-arrow.png';
import ExcerciseCard from './ExcerciseCard';
import "../App.css"


const LeftArrow = () => {
    const {scrollPrev} = useContext(VisibilityContext);

    return (
        <Typography sx={{mr: '60px'}} onClick={() => scrollPrev()} className="right-arrow" >
            <img src={LeftArrowIcon} alt="right-arrow" />
        </Typography>
    );
};

const RightArrow = () => {
    const {scrollNext} = useContext(VisibilityContext);

    return (
        <Typography onClick={() => scrollNext()} className="right-arrow" >
            <img src={RightArrowIcon} alt="right-arrow" />
        </Typography>
    );
};

const HorizontalScrollBar = ({ data, bodyPart, setBodyPart, isBodyPart }) => {
    return (
        <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
            {data.map((item) => (
                <Box
                    key={item.id || item}
                    itemId={item.id || item}
                    title={item.id || item}
                    m="0 40px"
                >
                    {isBodyPart?
                    <BodyPart item={item} bodyPart={bodyPart} setBodyPart={setBodyPart} />
                    : <ExcerciseCard excercise={item} />}
                </Box>
            )
            )}
        </ScrollMenu>
    );
}

export default HorizontalScrollBar 