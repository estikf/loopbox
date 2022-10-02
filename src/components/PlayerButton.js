import {Grid, IconButton, Typography} from '@mui/material';
import {PlayCircle, StopCircle} from '@mui/icons-material/';
import { useDispatch } from 'react-redux';
import { startContext, startPlayer, stopPlayer } from '../features/coreSlice';

export const PlayerButton = ({isContextStarted, title, parent, isPlaying}) => {

    const dispatch = useDispatch()

    const handleOnClick = () => {

      if(!isContextStarted){
        dispatch(startContext())
      }

      if(isPlaying){
        dispatch(stopPlayer({player:{title:title,parent:parent}}))
      }else{
        dispatch(startPlayer({player:{title:title, parent:parent}}))
      }
    }

  return (
    <Grid container justifyContent={"center"}>
      <Grid item>
        <IconButton
            style={{fontSize:"3rem", padding:"0px"}}
            onClick={() => handleOnClick()}
        >
            {isPlaying ? <StopCircle color="primary" fontSize='3rem'/> : <PlayCircle color="secondary" fontSize='3rem'/>}
        </IconButton>
      </Grid>
      <Grid item>
        <Typography variant="overline" color="gray" >
          {parent.charAt(0).toUpperCase() + parent.slice(1)}
        </Typography>
      </Grid>
    </Grid>
    
  )
}
