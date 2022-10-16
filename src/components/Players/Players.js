import { Grid } from '@mui/material';
import React from 'react'
import { useHistory, useParams } from 'react-router-dom';
import { usePlayers } from '../../helpers/usePlayers';
import { LoadingBar } from '../LoadingBar';
import { PlayersTable } from './PlayersTable';
import loopkits from '../../helpers/loopkits.json';

export const Players = () => {
    const history = useHistory()
    const {id} = useParams()

    !loopkits[id] && history.push("/")

    const [players, bpm, loadingProgress] = usePlayers(id);

    return (
        loopkits[id] &&
        <Grid
            container
            justifyContent={"center"}
            alignItems="center"
            height={"100%"}
        >
            <Grid item lg={8} md={10} xs={12}>
                {players && (loadingProgress ===  players.length) ? (
                    <PlayersTable 
                        bpm={bpm}
                        players={players}
                        id={id}
                    />
                ) : (
                    <LoadingBar
                        loadingProgress={(loadingProgress * 100) / players.length}
                    />
                )}
            </Grid>
        </Grid>
  )
}
