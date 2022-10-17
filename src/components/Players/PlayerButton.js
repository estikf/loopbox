import {Box, Button,Typography} from '@mui/material';
import {PlayCircle, StopCircle} from '@mui/icons-material/';
import { useSelector } from 'react-redux';

export const PlayerButton = ({context, startContext, startPlayer, addToQueue, stopPlayer, parent, title, startColor, stopColor}) => { 

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
          return <StopCircle className="button-icon"/>
        case "stopped":
          return <PlayCircle className="button-icon"/>
        default:
          return <PlayCircle className="button-icon"/>
      }
    }

    const renderButtonBgColor = () => {
      switch (button.status) {
        case "queued":
          return ({
            "WebkitAnimation": "glowing 1000ms infinite",
            "MozAnimation": "glowing 1000ms infinite",
            "Oanimation": "glowing 1000ms infinite",
            "animation": "glowing 1000ms infinite",
            "backgroundColor":`${stopColor} !important`
          })
        case "playing":
          return ({"backgroundColor":`${startColor} !important`})
        case "stopped":
          return ({"backgroundColor":`${stopColor} !important`})
        default:
          return ({"backgroundColor":`${stopColor} !important`})
      }
    }

  return (
    <Button 
      className={"player-button"}
      onClick={() => handleOnClick()}
      disabled={button.status === "queued"}
      sx={renderButtonBgColor()}
      color={"inherit"}
    >
      <Box fontSize={"2.8rem"} position={"relative"}>
        {renderButtonStatus()}
      </Box>
      <Box position={"absolute"} bottom="0.2rem">
        <Typography variant="overline" className="player-text">
          {parent.charAt(0).toUpperCase() + parent.slice(1)}
        </Typography>
      </Box>
    </Button>
    
  )
}
