import { Grid } from "@mui/material";
import { useHistory, useParams } from "react-router-dom";
import { usePlayers } from "../../utils/usePlayers";
import { LoadingBar } from "../Shared/LoadingBar";
import { Board } from "./Board";
import loopkits from "../../data/loopkits.json";

export const BoardWrapper = () => {
    const history = useHistory();
    const { id } = useParams();
    const currentLoopkit = loopkits.list.find((i) => i.id === id);
    
    // return to the homepage if there is no loopkit with that id
    !currentLoopkit && history.push("/");
    
    const [players, bpm, loadingProgress, handleOnClick] = usePlayers(id);
    const isLoading = !(loadingProgress === 100);

    return (
        <Grid
            container
            justifyContent="center"
            alignItems="center"
            height="100%"
        >
            <Grid item lg={8} md={10} xs={12}>
                {isLoading ? (
                    <LoadingBar
                        loadingProgress={loadingProgress}
                    />
                ) : (
                    <Board
                        id={id}
                        bpm={bpm} 
                        players={players}
                        handleOnClick={(button, player) => handleOnClick(button, player)}
                    /> 
                )}
            </Grid>
        </Grid>
    );
};
