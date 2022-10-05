import {Grid, IconButton, Typography} from '@mui/material';
import {Pending, PlayCircle, StopCircle} from '@mui/icons-material/';
import { useSelector } from 'react-redux';

export const PlayerButton = ({context, startContext, startPlayer, addToQueue, stopPlayer, parent, title}) => { 

    const button = useSelector(state => state.core.players.find(i => i.title === title))

    const handleOnClick = () => {
      if(!context.isPlaying){
        startContext()
      }

      if(button.status === "queued"){return;}

      if(button.status === "stopped"){
        addToQueue(() => startPlayer())
        
      }else{
        addToQueue(() => stopPlayer())
      }
    }

    const renderButtonStatus = () => {
      switch (button.status) {
        case "queued":
          return <Pending style={{color:"grey"}} fontSize="3rem" />
        case "playing":
          return <StopCircle color="warning" fontSize='3rem' />
        case "stopped":
          return <PlayCircle color="secondary" fontSize="3rem" />
        default:
          return "test"
      }
    }

  return (
    <Grid container flexDirection={"column"} justifyContent={"center"}>
      <Grid item>
        <IconButton
            style={{fontSize:"3rem"}}
            onClick={() => handleOnClick()}
            disabled={button.status === "queued"}
        >
            {renderButtonStatus()}
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
