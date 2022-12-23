import { Grid } from "@mui/material";
import React from "react";
import { useHistory, useParams } from "react-router-dom";
import { usePlayers } from "../../helpers/usePlayers";
import { LoadingBar } from "../LoadingBar";
import { PlayersTable } from "./PlayersTable";
import loopkits from "../../helpers/loopkits.json";

export const Players = () => {
    const history = useHistory();
    const { id } = useParams();
    const currentLoopkit = loopkits.loopkits.find((i) => i.id === id);
    const [players, bpm, loadingProgress] = usePlayers(id);
    const isLoading = !(Math.round(loadingProgress) === 100);

    // return to the homepage if there is no loopkit with that id
    !currentLoopkit && history.push("/");

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
                    <PlayersTable
                        id={id}
                        bpm={bpm} 
                        players={players}
                    /> 
                )}
            </Grid>
        </Grid>
    );
};
