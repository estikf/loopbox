import { Grid } from '@mui/material'
import React from 'react'
import { PlayerButton } from './PlayerButton'

export const PlayersTable = ({players, startPlayer, stopPlayer}) => {
  return (
        <Grid container justifyContent={"center"} flexDirection="row" height={"100%"}>
            {players && players.map((group,index) => 
                <Grid key={index} item xs={3}>
                    <Grid container alignItems="center" flexDirection="column" justifyContent={"center"} height="100%" pt={"5rem"} pb={"5rem"}>
                        {group && group.map((button,index) => 
                        <Grid key={index} item xs={3}>
                            <PlayerButton
                                key={index}
                                title={button.title}
                                startPlayer={() => startPlayer(button.player, -3)}
                                stopPlayer={() => stopPlayer(button.player)}
                            />
                        </Grid>
                        )}
                    </Grid>
                </Grid>
            )}
        </Grid>
  )
}
