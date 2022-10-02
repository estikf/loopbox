import { Grid } from '@mui/material'
import React from 'react'
import { PlayerButton } from './PlayerButton'

export const PlayersTable = ({players, isContextStarted}) => {
  return (
        <Grid container spacing={3} justifyContent={"center"} flexDirection="row" width={"100%"} height={"100%"} className="players-table">
            {players && players.map((group,index) => 
                <Grid item xs={2} key={index}>
                    <Grid container spacing={4} alignItems="center" flexDirection="column" justifyContent={"space-between"} pt={4} pb={4}>
                        {group.buttons && group.buttons.map((button,index) => {
                            return(
                                <Grid key={index} item xs={3}>
                                    <PlayerButton
                                        key={index}
                                        title={button.title}
                                        parent={button.parent}
                                        isPlaying={button.isPlaying}
                                        isContextStarted={isContextStarted}
                                    />
                                </Grid>
                        )})}
                    </Grid>
                </Grid>
            )}
        </Grid>
  )
}
