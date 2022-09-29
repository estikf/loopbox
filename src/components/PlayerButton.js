import React, { useState } from 'react'
import {IconButton} from '@mui/material';
import {PlayCircle, StopCircle} from '@mui/icons-material/';
export const PlayerButton = ({title, startPlayer, stopPlayer}) => {
    const [isPlaying, setIsPlaying] = useState(false)

    const handleOnClick = () => {
        if(isPlaying){
            stopPlayer()
            setIsPlaying(false)
        }else{
            startPlayer()
            setIsPlaying(true)
        }
    }

  return (
    <IconButton
        style={{fontSize:"5rem"}}
        title = {title}
        onClick={handleOnClick}
    >
        {isPlaying ? <StopCircle color="warning" fontSize='5rem'/> : <PlayCircle color="secondary" fontSize='5rem'/>}
    </IconButton>
  )
}
