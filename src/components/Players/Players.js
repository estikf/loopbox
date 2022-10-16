import { Box, Grid, Typography } from '@mui/material';
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

    const [players, bpm, loadingProgress, category] = usePlayers(id);

    return (
        loopkits[id] &&
        <Grid
            container
            justifyContent={"center"}
            alignItems="center"
            height={"100%"}
            mb={3}
        >
            <Grid item lg={8} md={10} xs={12}>
                <Box mb={3}>
                    <Typography variant="h5" color="white" textAlign={"center"}>
                        {category}
                    </Typography>
                </Box>
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
