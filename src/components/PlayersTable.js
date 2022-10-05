import { Grid } from '@mui/material'
import React, { useEffect, useRef } from 'react'
import { PlayerButton } from './PlayerButton'
import * as Tone from 'tone'
import { useDispatch, useSelector } from 'react-redux'
import { queuedButtonState, startButtonState, stopButtonState} from '../features/coreSlice'

const Transport = Tone.Transport
Transport.bpm.value = 126

export const PlayersTable = ({players}) => {
    
    const dispatch = useDispatch()
    const context = useSelector(state => state.core.context)
    const playerQueue = useRef([])
    
    useEffect(() => {
        Transport.scheduleRepeat((time) => {
            if(playerQueue.current.length > 0){
                playerQueue.current.forEach(i => i())
            }
            playerQueue.current = []
        },"00:4")
    },[])
    
    const startContext = () => {
        Tone.start()
        Transport.start()
    }

    const startPlayer = (parent, title) => {
        if(!context.isStarted){
            startContext()
        }

        const group = players.filter(i => i.parent === parent)
        const button = players.filter(i => i.title === title)[0]
        const otherPlayersInGroup = group.filter(i => i.title !== title)
        const player = button.loop

        // start the player
        player.volume.value = -3
        player.loop = true
        player.sync().start(Transport.blockTime)

        // stop other players in the group
        otherPlayersInGroup.forEach((i) => {
            i.loop.unsync().stop()
        })

        // update the state with the new array
        dispatch(startButtonState({parent:parent,title:title}))
    }

    const stopPlayer = (title) => {
        const button = players.find(i => i.title === title).loop
        button.unsync().stop()
        dispatch(stopButtonState({title:title}))
    }

    const addToQueue = (callback, title) => {
        callback && playerQueue.current.push(callback)
        dispatch(queuedButtonState({title:title}))
    }

    const chunkArray = (array, size) => {
        let result = []
        for (let i = 0; i < array.length; i += size) {
          let chunk = array.slice(i, i + size)
          result.push(chunk)
        }
        return result
      }


  return (
        <Grid container alignItems={"center"} justifyContent={"center"} flexDirection="row">
            {
                chunkArray(players,4).map(((group, index) => 
                    <Grid item xs={3} key={index} width={"100%"} height={"100%"} className={((index+1) !== chunkArray(players,4).length) && "player-group"}>
                        <Grid container alignItems={"center"} justifyContent={"center"} flexDirection="column">
                            {group && group.map((player,index) => 
                                <Grid item xs={12} key={index}>
                                    <PlayerButton
                                        key={index}
                                        title={player.title}
                                        parent={player.parent}
                                        context={context}
                                        startContext={() => startContext()}
                                        addToQueue = {(cb) => addToQueue(cb,player.title)}
                                        startPlayer={() => startPlayer(player.parent, player.title)}
                                        stopPlayer={() => stopPlayer(player.title)}
                                    />
                                </Grid>
                            )}
                        </Grid>
                    </Grid>
                ))
            }
        </Grid>
  )
}
