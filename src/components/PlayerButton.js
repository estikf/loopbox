import {Box, Button, Grid, IconButton, Typography} from '@mui/material';
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
        case "playing":
          return <StopCircle color="inherit" fontSize='3rem' />
        case "stopped":
          return <PlayCircle color="inherit" fontSize="3rem" />
        default:
          return <PlayCircle color="inherit" fontSize="3rem" />
      }
    }

    const renderButtonClassName = () => {
      switch (button.status) {
        case "queued":
          return "player-queued"
        case "playing":
          return "player-started"
        case "stopped":
          return "player-stopped"
      }
    }

  return (
    <Button 
      className={`player-button ${renderButtonClassName()}`}
      onClick={() => handleOnClick()}
      disabled={button.status === "queued"}
      color="inherit"
    >
      <Box fontSize={"2.8rem"} position={"absolute"} top="0.4rem">
        {renderButtonStatus()}
      </Box>
      <Box position={"absolute"} bottom="0.4rem">
        <Typography variant="overline" className="player-text">
          {parent.charAt(0).toUpperCase() + parent.slice(1)}
        </Typography>
      </Box>
    </Button>
    
  )
}
