import { Box, Button, CircularProgress, Typography } from "@mui/material";
import { PauseCircle, PlayCircle } from "@mui/icons-material/";
import { useSelector } from "react-redux";

export const PlayerButton = ({
    handleOnClick,
    player
}) => {

    const button = useSelector((state) => state.core.players.find((i) => i.title === player.title));
    const styles = {
        status:{
            "playing":<PauseCircle className="button-icon" />,
            "stopped":<PlayCircle className="button-icon" />,
            "queued":<CircularProgress variant="indeterminate" color="inherit" className="button-icon"/>,
        },
        backgroundColor:{
            "queued":{
                WebkitAnimation: "glowing 1000ms infinite",
                MozAnimation: "glowing 1000ms infinite",
                Oanimation: "glowing 1000ms infinite",
                animation: "glowing 1000ms infinite",
                backgroundColor: `${player.stopColor} !important`,
            },
            "playing":{ backgroundColor: `${player.startColor} !important` },
            "stopped":{ backgroundColor: `${player.stopColor} !important` }
        }
    }

    return (
        <Button
            className={"player-button"}
            onClick={() => handleOnClick(button, player)}
            disabled={button.status === "queued"}
            sx={styles.backgroundColor[button.status]}
            color={"inherit"}
        >
            <Box fontSize={"2.8rem"} position={"relative"}>
                {styles.status[button.status]}
            </Box>
            <Box position={"absolute"} bottom="0.2rem">
                <Typography variant="overline" className="player-text">
                    {player.parent.charAt(0).toUpperCase() + player.parent.slice(1)}
                </Typography>
            </Box>
        </Button>
    );
};
