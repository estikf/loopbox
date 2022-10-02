import { createSlice } from '@reduxjs/toolkit'
import * as tone from 'tone'

import { loops } from '../components/loops'

const Tone = tone
const Transport = Tone.Transport

const initialState = {
    context:{
      isLoaded:true,
      isStarted:false
    },
    players: [
      {
          name:"kick",
          buttons:[
              {
                  loop:true,
                  isPlaying:false,
                  title: "kick1",
                  parent:"kick",
              },
              {
                  loop:true,
                  isPlaying:false,
                  title: "kick2",
                  parent:"kick",
              },
              {
                  loop:true,
                  isPlaying:false,
                  title: "kick3",
                  parent:"kick",
              },
              {
                  loop:true,
                  isPlaying:false,
                  title: "kick4",
                  parent:"kick",
              },
          ]
      },
      {
          name:"top",
          buttons:[
              {
                  loop:true,
                  isPlaying:false,
                  title: "top1",
                  parent:"top",
             },
              {
                  loop:true,
                  isPlaying:false,
                  title: "top2",
                  parent:"top",
             },
              {
                  loop:true,
                  isPlaying:false,
                  title: "top3",
                  parent:"top",
             },
              {
                  loop:true,
                  isPlaying:false,
                  title: "top4",
                  parent:"top",
             },
          ]
      },
      {
          name:"synth",
          buttons:[
              {
                  loop:true,
                  isPlaying:false,
                  title: "synth1",
                  parent:"synth",
              },
              {
                  loop:true,
                  isPlaying:false,
                  title: "synth2",
                  parent:"synth",
              },
              {
                  loop:true,
                  isPlaying:false,
                  title: "synth3",
                  parent:"synth",
              },
              {
                  loop:true,
                  isPlaying:false,
                  title: "synth4",
                  parent:"synth",
              },
          ]
      },
      {
          name:"brass",
          buttons:[
              {
                  loop:true,
                  isPlaying:false,
                  title: "brass1",
                  parent:"brass",
            },
              {
                  loop:true,
                  isPlaying:false,
                  title: "brass2",
                  parent:"brass",
            },
              {
                  loop:true,
                  isPlaying:false,
                  title: "brass3",
                  parent:"brass",
            },
              {
                  loop:true,
                  isPlaying:false,
                  title: "brass4",
                  parent:"brass",
            },
          ]
        },
        {
            name:"fx",
            buttons:[
                {
                    loop:true,
                    isPlaying:false,
                    title: "fx1",
                    parent:"fx",
                },
            ]
        }
  ]
}

export const coreSlice = createSlice({
  name: 'core',
  initialState,
  reducers: {
    setIsLoaded: (state) => {
        state.context.isLoaded = true
    },
    startContext: (state) => {
      Tone.start()
      Transport.start()
      state.context.isStarted = true
    },
    startPlayer: (state, action) => {

    const group = state.players.filter(i => i.name === action.payload.player.parent)[0]
    const button = group.buttons.filter(i => i.title === action.payload.player.title)[0]

    button.isPlaying = true

    const player = loops.filter(i => i.title === action.payload.player.title)[0].loop
    // start the player
    player.loop = button.loop
    player.volume.value = -5
    player.sync().start(Transport.blockTime)


    // set state of other players to false
    group
        .buttons
        .filter(i => i.title !== action.payload.player.title)
        .forEach(i => {
            i.isPlaying = false
        })

    // stop other loops
    loops
        .filter(i => i.parent === action.payload.player.parent)
        .filter(i => i.title !== action.payload.player.title)
        .forEach(i => {
            i.loop.unsync().stop()
        })
    },
    stopPlayer: (state, action) => {

    let group = state.players.filter(i => i.name === action.payload.player.parent)[0]
    let button = group.buttons.filter(i => i.title === action.payload.player.title)[0]
    const player = loops.filter(i => i.title === action.payload.player.title)[0].loop

    player.unsync().stop()
    button.isPlaying = false
    }
  }
})

// Action creators are generated for each case reducer function
export const { startContext, startPlayer, stopPlayer, setIsLoaded } = coreSlice.actions

export default coreSlice.reducer