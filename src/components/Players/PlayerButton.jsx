import { Box, Button, Typography } from "@mui/material";
import { PlayCircle, StopCircle } from "@mui/icons-material/";
import { useSelector } from "react-redux";
import * as Tone from "tone";

const renderButtonStatus = (status) => {
  switch (status) {
      case "playing":
          return <StopCircle className="button-icon" />;
      case "stopped":
          return <PlayCircle className="button-icon" />;
      default:
          return <PlayCircle className="button-icon" />;
  }
};

const renderButtonBgColor = (status, startColor, stopColor) => {
  switch (status) {
      case "queued":
          return {
              WebkitAnimation: "glowing 1000ms infinite",
              MozAnimation: "glowing 1000ms infinite",
              Oanimation: "glowing 1000ms infinite",
              animation: "glowing 1000ms infinite",
              backgroundColor: `${stopColor} !important`,
          };
      case "playing":
          return { backgroundColor: `${startColor} !important` };
      case "stopped":
          return { backgroundColor: `${stopColor} !important` };
      default:
          return { backgroundColor: `${stopColor} !important` };
  }
};

export const PlayerButton = ({
    context,
    startContext,
    startPlayer,
    addToQueue,
    stopPlayer,
    parent,
    title,
    startColor,
    stopColor,
}) => {
    const button = useSelector((state) =>
        state.core.players.find((i) => i.title === title)
    );

    const handleOnClick = async () => {
        if (!context.isStarted) {
            Tone.context.resume();
            await startContext();
        }

        if (button.status === "queued") {
            return;
        }

        if (button.status === "stopped") {
            addToQueue(() => startPlayer());
        } else {
            addToQueue(() => stopPlayer());
        }
    };


    return (
        <Button
            className={"player-button"}
            onClick={() => handleOnClick()}
            disabled={button.status === "queued"}
            sx={renderButtonBgColor(button.status, startColor, stopColor)}
            color={"inherit"}
        >
            <Box fontSize={"2.8rem"} position={"relative"}>
                {renderButtonStatus(button.status)}
            </Box>
            <Box position={"absolute"} bottom="0.2rem">
                <Typography variant="overline" className="player-text">
                    {parent.charAt(0).toUpperCase() + parent.slice(1)}
                </Typography>
            </Box>
        </Button>
    );
};
