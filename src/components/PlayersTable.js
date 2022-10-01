import { Grid } from '@mui/material'
import React from 'react'
import { PlayerButton } from './PlayerButton'

export const PlayersTable = ({players, startPlayer, stopPlayer}) => {
  return (
        <Grid container justifyContent={"center"} flexDirection="row" height={"100%"}>
            {players && players.map((group,index) => 
                <Grid key={index} item xs={3}>
                    <Grid container alignItems="center" flexDirection="column" justifyContent={"center"} height="100%" pt={"5rem"} pb={"5rem"}>
                        {group.buttons && group.buttons.map((button,index) => {
                            console.log(button.parent)
                            return(
                                <Grid key={index} item xs={3}>
                                    <PlayerButton
                                        key={index}
                                        title={button.title}
                                        startPlayer={() => startPlayer(button.title, button.player,button.parent, -3)}
                                        stopPlayer={() => stopPlayer(button.player)}
                                    />
                                </Grid>
                        )})}
                    </Grid>
                </Grid>
            )}
        </Grid>
  )
}
